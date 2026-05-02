class FluidBackground {
  constructor(options = {}) {
    this.options = {
      container: document.body,
      ...options
    };

    this.init();
  }

  init() {
    this.createFluidBackground();
  }

  createFluidBackground() {
    // Create the fluid background container
    const fluidContainer = document.createElement('div');
    fluidContainer.className = 'waterCanvas';
    fluidContainer.setAttribute('aria-hidden', 'true');
    
    // Create the blob elements
    const blob1 = document.createElement('div');
    blob1.className = 'blob1';
    
    const blob2 = document.createElement('div');
    blob2.className = 'blob2';
    
    const blob3 = document.createElement('div');
    blob3.className = 'blob3';
    
    const rippleOverlay = document.createElement('div');
    rippleOverlay.className = 'rippleOverlay';
    
    // Append all elements
    fluidContainer.appendChild(blob1);
    fluidContainer.appendChild(blob2);
    fluidContainer.appendChild(blob3);
    fluidContainer.appendChild(rippleOverlay);
    
    // Add CSS link if not already present
    this.addCSS();
    
    // Ensure body and html are transparent
    document.documentElement.style.backgroundColor = 'transparent';
    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundImage = 'none';
    
    // Add to container
    this.options.container.appendChild(fluidContainer);
  }

  addCSS() {
    // Check if CSS is already added
    if (document.querySelector('link[href*="fluidBackground.css"]')) {
      return;
    }
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'fluidBackground.css';
    document.head.appendChild(link);
  }

  destroy() {
    const fluidContainer = document.querySelector('.waterCanvas');
    if (fluidContainer) {
      fluidContainer.remove();
    }
    
    // Restore original background if needed
    document.documentElement.style.backgroundColor = '';
    document.body.style.backgroundColor = '';
    document.body.style.backgroundImage = '';
  }
}

// Initialize automatically if script is loaded
if (typeof window !== 'undefined') {
  window.FluidBackground = FluidBackground;
  
  // Auto-initialize if not in module context
  if (!window.FluidBackgroundInitialized) {
    window.FluidBackgroundInitialized = true;
    
    document.addEventListener('DOMContentLoaded', () => {
      new FluidBackground();
    });
  }
}