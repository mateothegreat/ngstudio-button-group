import { Component } from '@angular/core';
import { Button } from './button';
import { ButtonGroupInstance } from './button-group-instance';

@Component({
    selector: 'lib-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: [ './button-group.component.scss' ]
})
export class ButtonGroupComponent {

    public instance: ButtonGroupInstance = null;

    public onClick(button: Button): void {

        this.instance.config.selected = button;

        this.instance.click$.next(button);

    }

}
