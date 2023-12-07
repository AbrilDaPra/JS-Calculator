class Display {
    constructor(displayLastValue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayLastValue = displayLastValue;
        this.calculator = new Calculator();
        this.kindOfOperation = undefined;
        this.actualValue = "";
        this.lastValue = "";
        this.signs = {
            add: "+",
            split: "%",
            multiply: "X",
            subtract: "-",
        }
    }

    delete() {
        this.actualValue = this.actualValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll() {
        this.actualValue = "";
        this.lastValue = "";
        this.kindOfOperation = undefined;
        this.printValues();
    }

    compute(kind) {
        this.kindOfOperation !== "equal" && this.calculate();
        this.kindOfOperation = kind;
        this.lastValue = this.actualValue || this.lastValue;
        this.actualValue = "";
        this.printValues();
    }

    addNumber(number) {
        if(number === "," && this.actualValue.includes(".")) return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayActualValue.textContent = this.actualValue;
        this.displayLastValue.textContent = `${this.lastValue} ${this.signs[this.kindOfOperation] || ""}`;
    }

    calculate() {
        const lastValue = parseFloat(this.lastValue);
        const actualValue = parseFloat(this.actualValue);

        if( isNaN(actualValue) || isNaN(lastValue) ) return
        this.actualValue = this.calculator[this.kindOfOperation](lastValue, actualValue);
    }
}