class Wallet {
    constructor(money) {
        let _money = money;
        // Pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;
        // Sprawdzanie czy użytkownik ma odpowiednią ilość środków do gry
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error('Nieprawidłowy typ działania');
                }
            } else {
                throw new Error('Nieprawidłowa liczba');
            }
        }
    }
}