import './public-path';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModuleRef } from '@angular/core';
import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//     .catch(err => console.error(err));

let app: void | NgModuleRef<AppModule>;
async function render() {
    app = await platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
}


if (!(window as any).__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap(props: Object) {
    console.log(props);
}

export async function mount(props: Object) {
    render();
}

export async function unmount(props: Object) {
    console.log(props);
    // @ts-ignore
    app.destroy();
}

