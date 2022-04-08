import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonGroupService } from '../../projects/button-group/src/lib/button-group.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

    @ViewChild('one', { read: ViewContainerRef }) private one: ViewContainerRef;
    @ViewChild('two', { read: ViewContainerRef }) private two: ViewContainerRef;

    public constructor(private readonly buttonGroupService: ButtonGroupService) {

    }

    public ngAfterViewInit() {

        this.buttonGroupService.open('one', this.one, {

            buttons: [

                {

                    label: 'one'

                }, {

                    label: 'two'

                }

            ],

            theme: {

                backgroundColor: '#999',

                hover: {

                    backgroundColor: '#fff'

                },
                active: {

                    backgroundColor: '##eee'

                }

            }

        }).click$.subscribe(button => {

            console.log(button);

        });

    }

}
