export class RateModifier {
    rateString = [];
    rateFromNumbers = [];
    rateToNumbers = [];
    rateFrom: number;
    rateTo: number;

    async splitRate(rateList: any) {
        this.rateString = rateList.split();
        this.rateFromNumbers.push(this.rateString[0].split('.'));
        this.rateFrom = 10
            * Number(this.rateFromNumbers[0])
            + Number(this.rateFromNumbers[1]);
        if (this.rateString[1]) {
            this.rateToNumbers.push(this.rateString[1].split('.'));
            this.rateTo = 10
                * Number(this.rateToNumbers[0])
                + Number(this.rateToNumbers[1]);
        }
        if (this.rateTo) {
            return ( this.rateFrom, this.rateTo )
        } else {
            return ( this.rateFrom )
        }
    }
}