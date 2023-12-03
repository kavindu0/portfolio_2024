import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Base64} from '../../shared/files/base64';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textToType: string[] = [
    "a Web developer",
    "an Android developer",
    "a Frontend developer",
    "a Backend developer",
    "a Graphics designer",
    "a Freelancer",
    "an Entrepreneur",
    "a Cross-platform app developer",
  ];

  typingSpeed = 120;
  currentText = '';
  textIndex = 0;
  charIndex = 0;

  marqueeContainer = document.getElementById('marqueeContainer') as HTMLElement;
  marqueeItems = document.querySelectorAll('.marquee');

  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement> | any;

  ngOnInit() {
    this.profileImage();
    this.typeText();
    this.updateMarquee();
  }

  profileImage() {
    const image = new Image();
    image.src = Base64.data;
    const canvas = document.querySelector('#canvas-pro') as HTMLCanvasElement;

    image.addEventListener('load', () => {
      const ctx: any = canvas.getContext('2d');

      canvas.width = 320;
      canvas.height = 320;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      let particles: any = [];
      const numParticles = 5000;

      let mappedImage: any = [];
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
          const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
          const green = pixels.data[(y * 4 * pixels.width) + (x * 4) + 1];
          const blue = pixels.data[(y * 4 * pixels.width) + (x * 4) + 2];
          const brightness = this.calculateRelativeBrightness(red, green, blue);
          const cell = {
            cellBrightness: brightness
          };

          row.push(cell);
        }
        mappedImage.push(row);
      }

      class Particle {
        x: number;
        y: number;
        speed: number;
        velocity: number;
        size: number;
        position1: number;
        position2: number;

        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = 0;
          this.speed = 0;
          this.velocity = Math.random() * 0.8;
          this.size = Math.random() * 0.7;
          this.position1 = Math.floor(this.y);
          this.position2 = Math.floor(this.x);
        }

        update() {
          this.position1 = Math.floor(this.y);
          this.position2 = Math.floor(this.x);
          this.speed = mappedImage[this.position1][this.position2].cellBrightness;
          let movement = (2.5 - this.speed) + this.velocity;

          this.y += movement;
          if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
          }
        }

        draw() {
          ctx.fillStyle = '#d6c8ab';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      function init() {
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle());
        }
      }

      function animate() {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          ctx.globalAlpha = particles[i].speed / 2.5;
          particles[i].draw();
        }
        requestAnimationFrame(animate);
      }

      init();
      animate();
    });
  }

  calculateRelativeBrightness(red: number, green: number, blue: number) {
    return Math.sqrt(
      (red * red) * 0.299 +
      (green * green) * 0.587 +
      (blue * blue) * 0.114
    ) / 100;
  }

  typeText() {
    if (this.textIndex < this.textToType.length) {
      if (this.charIndex <= this.textToType[this.textIndex].length) {
        this.currentText = this.textToType[this.textIndex].substring(0, this.charIndex);
        this.charIndex++;
        setTimeout(() => this.typeText(), this.typingSpeed);
      } else {
        // Move to the next text
        this.textIndex++;
        this.charIndex = 0;
        setTimeout(() => this.typeText(), this.typingSpeed * 2); // Pause before typing the next text
      }
    } else {
      // All texts are typed
      this.charIndex = 0;
      this.textIndex = 0;
      setTimeout(() => this.typeText(), this.typingSpeed * 5); // Pause before restarting
    }
  }

  updateMarquee() {
    const clonedItems = Array.from(this.marqueeItems).map(item => item.cloneNode(true));

    clonedItems.forEach(item => {
      this.marqueeContainer.appendChild(item);
    });

    this.marqueeItems.forEach(item => item.remove());
  }

}
