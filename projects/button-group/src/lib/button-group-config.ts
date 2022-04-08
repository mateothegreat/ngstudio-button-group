import { Button } from './button';

export class ButtonGroupConfig {

    public buttons: Array<Button>;

    public theme?: {

        backgroundColor?: string,
        active?: {

            backgroundColor?: string

        },
        hover?: {

            backgroundColor?: string

        }

    };

}
