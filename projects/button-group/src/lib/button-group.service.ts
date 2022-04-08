import { Injectable, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { ButtonGroupConfig } from './button-group-config';
import { ButtonGroupInstance } from './button-group-instance';
import { ButtonGroupComponent } from './button-group.component';

@Injectable({
    providedIn: 'root'
})
export class ButtonGroupService {

    public instances: { [name: string]: ButtonGroupInstance } = {};

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(name: string, viewContainerRef: ViewContainerRef, config: ButtonGroupConfig): ButtonGroupInstance {

        const instance = this.dynamicComponentFactoryService.createInContainer('tabs', viewContainerRef, ButtonGroupComponent);

        this.instances[name] = new ButtonGroupInstance({

            name,
            config

        });

        instance.componentRef.instance.instance = this.instances[name];

        return this.instances[name];

    }

}
