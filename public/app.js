particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      
    },
    "interactivity": {
      "events": {
        "onclick": {
          "enable": false
        },
        "onhover": {
          "enable":false
        },
        "onresize": {
          "enable": true,
          "density_auto": true,
          "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
        }
      }
    },
    "color": {
      "value": "#edbc07"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": .6,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.3,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 100,
        "rotateY": 1200
      }
    }
  }});


