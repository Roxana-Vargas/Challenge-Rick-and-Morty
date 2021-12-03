import countCharInResourcePage from '../ex1/countCharInResourcePage';

describe('countCharInResourcePage', () => {

    const input = [
        {
            id: 11, 
            name: 'Bepis 9', 
            type: 'Planet', 
            dimension: 'unknown', 
            residents: ['https://rickandmortyapi.com/api/character/35']
        },
        {
            id: 12, 
            name: 'Cronenberg Earth', 
            type: 'Planet', 
            dimension: 'Cronenberg Dimension', 
            residents: []
        }
    ];   

    it('should be a function', () => {
        expect(typeof countCharInResourcePage).toBe('function');
    });

    it('should return the total amount of characters E in the names', () => {
        expect(countCharInResourcePage(input, 'e')).toEqual(4);
    });

    it('should return the total amount of characters C in the names', () => {
        expect(countCharInResourcePage(input, 'c')).toEqual(1);
    });

    it('should return the total amount of characters L in the names', () => {
        expect(countCharInResourcePage(input, 'l')).toEqual(0);
    });

    it('should count the same wether for uppercase or lowercarse', () => {
        expect(countCharInResourcePage(input, 'e')).toEqual(countCharInResourcePage(input, 'E'));
    });

});