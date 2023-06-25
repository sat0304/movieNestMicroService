export class RateModifier {
    rateString = [];
    rateFromNumbers = [];
    rateToNumbers = [];
    rateFrom: number;
    rateTo: number;

    async splitRate(rateList: any) {
        this.rateString = rateList.split(' ', 2);
        if (this.rateString[1]) {
            this.rateToNumbers = this.rateString[1].split('.', 2);
            this.rateTo = 10
                * Number(this.rateToNumbers[0])
                + Number(this.rateToNumbers[1]);
            this.rateFromNumbers = this.rateString[0].split('.', 2);
            this.rateFrom = 10
                * Number(this.rateFromNumbers[0])
                + Number(this.rateFromNumbers[1]);
        } else {
            this.rateFromNumbers = this.rateString[0].split('.', 2);
            this.rateFrom = 10
                * Number(this.rateFromNumbers[0])
                + Number(this.rateFromNumbers[1]);
        }
        if (this.rateTo) {
            return [this.rateFrom, this.rateTo ] as const
        } else {
            return [this.rateFrom ] as const
        }
    }
}
