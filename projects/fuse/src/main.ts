import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

let manifestPath = '';

if (environment.production) {
  console.log('PRODUCTION');
  manifestPath = 'assets/mf-prod.manifest.json';
} else {
  console.log('DEVELOP');
  manifestPath = 'assets/mf.manifest.json';
}

loadManifest(manifestPath)
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
