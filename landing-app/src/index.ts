import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('appLanding-mfe');
  
      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
      });
    }
  );
  
  export {};