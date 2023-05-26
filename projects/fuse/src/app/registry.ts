import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
    mainReact: () => loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        remoteName: 'mainReact',
        exposedModule: './mainReact'
    }),
};
