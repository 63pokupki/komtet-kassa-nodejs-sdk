/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class AuthorisedPerson {
    /**
     * @var string
     */
    private name: string;

    /**
     * @var string
     */
    private inn: string;

    /**
     * @param string $name
     * @param string $inn
     *
     * @return AuthorisedPerson
     */
    constructor(name: string, inn: string) {
        this.name = name;
        this.inn = inn;
    }

    /**
     * @return array
     */
    public asArray() {
        return {
            'name': this.name,
            'inn': this.inn
        };
    }
}
