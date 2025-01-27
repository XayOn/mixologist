import { StaticIngredient } from 'domain/entities/ingredient';
import { SpiritType } from 'domain/enums/spirit-type';

export function getStaticIngredients() {
    return [...currentIngredients];
}

const currentIngredients: StaticIngredient[] = [
    { id: '1', translation: 'light-rum', spiritType: SpiritType.Rum, abv: 40 },
    // https://en.wikipedia.org/wiki/Rum
    // From 40 to 80. Used 40
    {
        id: '2',
        translation: 'lime-juice',
        spiritType: SpiritType.None,
        replacementIds: ['106']
    },
    {
        id: '3',
        translation: 'simple-syrup',
        spiritType: SpiritType.None,
        recipeId: '114'
    },
    { id: '4', translation: 'soda-water', spiritType: SpiritType.None },
    { id: '5', translation: 'mint', spiritType: SpiritType.None },
    { id: '6', translation: 'gin', spiritType: SpiritType.Gin, abv: 37.5 },
    { id: '7', translation: 'tonic-water', spiritType: SpiritType.None },
    { id: '8', translation: 'vodka', spiritType: SpiritType.Vodka, abv: 37.5 },
    // https://en.wikipedia.org/wiki/Vodka
    // 37.5 EU or 40 USA
    { id: '9', translation: 'tomato-juice', spiritType: SpiritType.None },
    {
        id: '10',
        translation: 'lemon-juice',
        spiritType: SpiritType.None,
        replacementIds: ['105']
    },
    { id: '11', translation: 'tabasco-sauce', spiritType: SpiritType.None },
    {
        id: '12',
        translation: 'worcestershire-sauce',
        spiritType: SpiritType.None
    },
    { id: '13', translation: 'black-pepper', spiritType: SpiritType.None },
    { id: '14', translation: 'celery-salt', spiritType: SpiritType.None },
    { id: '15', translation: 'celery', spiritType: SpiritType.None },
    { id: '16', translation: 'powdered-sugar', spiritType: SpiritType.None },
    { id: '17', translation: 'cranberry-juice', spiritType: SpiritType.None },
    { id: '18', translation: 'tequila', spiritType: SpiritType.Tequila, abv: 40 },
    // https://en.wikipedia.org/wiki/Tequila
    // From 38 to 55. Used 40
    {
        id: '19',
        translation: 'orange-liqueur',
        spiritType: SpiritType.None,
        abv: 30,
        replacementIds: ['38', '92']
    },
    { id: '20', translation: 'strawberry', spiritType: SpiritType.None },
    { id: '21', translation: 'spiced-rum', spiritType: SpiritType.Rum, abv: 40 },
    // https://en.wikipedia.org/wiki/Rum
    // From 40 to 80. Used 40
    { id: '22', translation: 'amaretto', spiritType: SpiritType.None, abv: 24.0 },
    {
        id: '23',
        translation: 'egg-white',
        spiritType: SpiritType.None,
        replacementIds: ['114']
    },
    { id: '24', translation: 'ginger-beer', spiritType: SpiritType.None },
    { id: '25', translation: 'coconut-cream', spiritType: SpiritType.None },
    { id: '26', translation: 'pineapple-juice', spiritType: SpiritType.None },
    {
        id: '27',
        translation: 'angostura-bitters',
        spiritType: SpiritType.None,
        abv: 44.7
    },
    {
        id: '28',
        translation: 'bourbon-whiskey',
        spiritType: SpiritType.WiskeyScotch,
        abv: 40
    },
    {
        id: '29',
        translation: 'apricot-brandy',
        spiritType: SpiritType.CognacBrandy,
        abv: 42
    },
    // https://en.wikipedia.org/wiki/Fruit_brandy
    { id: '30', translation: 'grenadine', spiritType: SpiritType.None },
    {
        id: '31',
        translation: 'dry-vermouth',
        spiritType: SpiritType.None,
        abv: 15
    },
    { id: '32', translation: 'olive', spiritType: SpiritType.None },
    { id: '33', translation: 'galliano', spiritType: SpiritType.None, abv: 30 },
    // https://en.wikipedia.org/wiki/Triple_sec
    //42.3 and 30. Used 30
    { id: '34', translation: 'coffee', spiritType: SpiritType.None },
    { id: '35', translation: 'cream', spiritType: SpiritType.None },
    { id: '36', translation: 'campari', spiritType: SpiritType.None, abv: 23.8 },
    // https://en.wikipedia.org/wiki/Campari
    // ABV function of the country Used mean(c(20.5, 21, 24, 25, 28.5))
    {
        id: '37',
        translation: 'sweet-vermouth',
        spiritType: SpiritType.None,
        abv: 15
    },
    {
        id: '38',
        translation: 'triple-sec',
        spiritType: SpiritType.None,
        abv: 40,
        replacementIds: ['19', '92']
    },
    // https://en.wikipedia.org/wiki/Triple_sec
    // Used 40
    {
        id: '39',
        translation: 'southern-comfort',
        spiritType: SpiritType.WiskeyScotch,
        abv: 34
    },
    // https://en.wikipedia.org/wiki/Southern_Comfort
    // Used mean(c( 21, 30, 35, 50))
    { id: '40', translation: 'sloe-gin', spiritType: SpiritType.Gin, abv: 25 },
    // https://en.wikipedia.org/wiki/Sloe_gin
    // between 25 and 30. Used 25
    {
        id: '41',
        translation: 'irish-whiskey',
        spiritType: SpiritType.WiskeyScotch,
        abv: 40
    },
    // https://en.wikipedia.org/wiki/Irish_whiskey
    // 40 or more. Used 40
    { id: '42', translation: 'sugar', spiritType: SpiritType.None },
    {
        id: '43',
        translation: 'coffee-liqueur',
        spiritType: SpiritType.None,
        abv: 16
    },
    {
        id: '44',
        translation: 'blue-curacao',
        spiritType: SpiritType.None,
        abv: 21
    },
    { id: '45', translation: 'sprite', spiritType: SpiritType.None },
    { id: '46', translation: 'salt', spiritType: SpiritType.None },
    {
        id: '47',
        translation: 'creme-de-cacao',
        spiritType: SpiritType.None,
        abv: 24
    },
    { id: '48', translation: 'light-cream', spiritType: SpiritType.None },
    { id: '49', translation: 'nutmeg', spiritType: SpiritType.None },
    {
        id: '50',
        translation: 'brandy',
        spiritType: SpiritType.CognacBrandy,
        abv: 40
    },
    // https://en.wikipedia.org/wiki/Brandy
    // from 35 to 60. Used 40
    {
        id: '51',
        translation: 'lemon-vodka',
        spiritType: SpiritType.Vodka,
        abv: 40
    },
    {
        id: '52',
        translation: 'blended-whiskey',
        spiritType: SpiritType.WiskeyScotch,
        abv: 38
    },
    // https://en.wikipedia.org/wiki/Blended_whiskey
    // Unknown. Used 38
    {
        id: '53',
        translation: 'blackberry-brandy',
        spiritType: SpiritType.CognacBrandy,
        abv: 42
    },
    // https://en.wikipedia.org/wiki/Fruit_brandy
    { id: '54', translation: 'dark-rum', spiritType: SpiritType.Rum, abv: 40 },
    // https://en.wikipedia.org/wiki/Rum
    // From 40 to 80. Used 40
    {
        id: '55',
        translation: 'kahlua',
        spiritType: SpiritType.None,
        abv: 20,
        replacementIds: ['43']
    },
    // https://en.wikipedia.org/wiki/Kahl%C3%BAa
    {
        id: '56',
        translation: 'scotch',
        spiritType: SpiritType.WiskeyScotch,
        abv: 40
    },
    {
        id: '57',
        translation: 'maraschino-liqueur',
        spiritType: SpiritType.None,
        abv: 32
    },
    // https://en.wikipedia.org/wiki/Maraschino
    {
        id: '58',
        translation: 'orange-bitters',
        spiritType: SpiritType.None,
        abv: 28
    },
    {
        id: '59',
        translation: 'egg-yolk',
        spiritType: SpiritType.None,
        replacementIds: ['114']
    },
    { id: '60', translation: 'champagne', spiritType: SpiritType.None, abv: 11 },
    // https://en.wikipedia.org/wiki/Champagne
    // Unknown. Used a tentative 11
    {
        id: '61',
        translation: 'cognac',
        spiritType: SpiritType.CognacBrandy,
        abv: 45
    },
    // https://en.wikipedia.org/wiki/Cognac
    { id: '62', translation: 'chocolate-ice-cream', spiritType: SpiritType.None },
    { id: '63', translation: 'coca-cola', spiritType: SpiritType.None },
    { id: '64', translation: 'orange-juice', spiritType: SpiritType.None },
    {
        id: '65',
        translation: 'apple-brandy',
        spiritType: SpiritType.CognacBrandy,
        abv: 42
    },
    // https://en.wikipedia.org/wiki/Fruit_brandy
    { id: '66', translation: 'orgeat-syrup', spiritType: SpiritType.None },
    {
        id: '67',
        translation: 'sweet-and-sour',
        spiritType: SpiritType.None,
        recipeId: '115'
    },
    {
        id: '68',
        translation: 'creme-de-cassis',
        spiritType: SpiritType.None,
        abv: 17
    },
    {
        id: '69',
        translation: 'peach-schnapps',
        spiritType: SpiritType.None,
        abv: 20
    },
    { id: '70', translation: 'grapefruit-juice', spiritType: SpiritType.None },
    {
        id: '71',
        translation: 'coconut-liqueur',
        spiritType: SpiritType.None,
        abv: 21
    },
    { id: '72', translation: 'malibu-rum', spiritType: SpiritType.Rum, abv: 21 },
    // https://en.wikipedia.org/wiki/Malibu_(rum)
    { id: '73', translation: 'lager-beer', spiritType: SpiritType.None, abv: 5 },
    // https://en.wikipedia.org/wiki/Lager
    // Used a tentative 5
    { id: '74', translation: 'absinthe', spiritType: SpiritType.None, abv: 45 },
    // https://en.wikipedia.org/wiki/Absinthe
    // From 45 to 75. Used 45
    { id: '75', translation: 'licor-43', spiritType: SpiritType.None, abv: 30 },
    // https://en.wikipedia.org/wiki/Licor_43
    // Unknown. Used a tentative 30
    { id: '76', translation: 'blueberry-juice', spiritType: SpiritType.None },
    { id: '77', translation: 'milk', spiritType: SpiritType.None },
    {
        id: '78',
        translation: 'melon-liqueur',
        spiritType: SpiritType.None,
        abv: 17
    },
    { id: '79', translation: 'ouzo', spiritType: SpiritType.None, abv: 37.5 },
    // https://en.wikipedia.org/wiki/Ouzo
    // From 37.5 to  50. Used 37.5
    { id: '80', translation: 'aperol', spiritType: SpiritType.None, abv: 11 },
    {
        id: '81',
        translation: 'peach-brandy',
        spiritType: SpiritType.CognacBrandy,
        abv: 42
    },
    // https://en.wikipedia.org/wiki/Fruit_brandy
    { id: '82', translation: 'kiwi', spiritType: SpiritType.None },
    { id: '83', translation: 'elderflower-cordial', spiritType: SpiritType.None },
    // https://en.wikipedia.org/wiki/Elderflower_cordial
    { id: '84', translation: 'blackberries', spiritType: SpiritType.None },
    {
        id: '85',
        translation: 'orange-curacao',
        spiritType: SpiritType.None,
        abv: 30
    },
    // https://en.wikipedia.org/wiki/Cura%C3%A7ao_(liqueur)
    // From 15 to 40. Used 30
    { id: '86', translation: 'prosecco', spiritType: SpiritType.None, abv: 11 },
    { id: '87', translation: 'white-wine', spiritType: SpiritType.None, abv: 12 },
    { id: '88', translation: 'blueberries', spiritType: SpiritType.None },
    { id: '89', translation: 'agave-syrup', spiritType: SpiritType.None },
    { id: '90', translation: 'mezcal', spiritType: SpiritType.Tequila, abv: 47 },
    // https://en.wikipedia.org/wiki/Mezcal
    // From 40 to 55. Used 47
    { id: '91', translation: 'water', spiritType: SpiritType.None },
    {
        id: '92',
        translation: 'cointreau',
        spiritType: SpiritType.None,
        abv: 40,
        replacementIds: ['19', '38']
    },
    // https://en.wikipedia.org/wiki/Cointreau
    { id: '93', translation: 'pisco', spiritType: SpiritType.None, abv: 40 },
    // https://en.wikipedia.org/wiki/Pisco
    // Unknown. Used a tentative 40
    { id: '94', translation: 'aquafaba', spiritType: SpiritType.None },
    // https://en.wikipedia.org/wiki/Aquafaba
    { id: '95', translation: 'mango', spiritType: SpiritType.None },
    { id: '96', translation: 'passoa', spiritType: SpiritType.None },
    { id: '97', translation: 'apple-juice', spiritType: SpiritType.None },
    { id: '98', translation: 'carrot', spiritType: SpiritType.None },
    { id: '99', translation: 'banana', spiritType: SpiritType.None },
    { id: '100', translation: 'cachaca', spiritType: SpiritType.Rum, abv: 43 },
    // https://en.wikipedia.org/wiki/Cacha%C3%A7a
    // From 38 to 48. Used 43
    {
        id: '101',
        translation: 'red-wine',
        spiritType: SpiritType.None,
        abv: 13.0
    },
    { id: '102', translation: 'cloves', spiritType: SpiritType.None },
    { id: '103', translation: 'cinnamon', spiritType: SpiritType.None },
    { id: '104', translation: 'apple', spiritType: SpiritType.None },
    { id: '105', translation: 'lemon', spiritType: SpiritType.None },
    { id: '106', translation: 'lime', spiritType: SpiritType.None },
    {
        id: '107',
        translation: 'raspberry-liqueur',
        spiritType: SpiritType.None,
        abv: 17
    },
    { id: '108', translation: 'baileys', spiritType: SpiritType.None, abv: 17 },
    //https://en.wikipedia.org/wiki/Baileys_Irish_Cream
    {
        id: '109',
        translation: 'grand-marnier',
        spiritType: SpiritType.None,
        abv: 40
    },
    // https://en.wikipedia.org/wiki/Grand_Marnier
    { id: '110', translation: 'gold-rum', spiritType: SpiritType.Rum, abv: 40 },
    // https://en.wikipedia.org/wiki/Rum
    // From 40 to 80. Used 40
    {
        id: '111',
        translation: 'creme-de-mure',
        spiritType: SpiritType.None,
        abv: 18
    },
    {
        id: '112',
        translation: 'green-chartreuse',
        spiritType: SpiritType.None,
        abv: 55
    },
    // https://en.wikipedia.org/wiki/Chartreuse_(liqueur)
    // From 40 to 69. Used 55
    { id: '113', translation: 'port-wine', spiritType: SpiritType.None, abv: 20 },
    // https://en.wikipedia.org/wiki/Port_wine
    { id: '114', translation: 'egg', spiritType: SpiritType.None },
    { id: '115', translation: 'honey-syrup', spiritType: SpiritType.None },
    {
        id: '116',
        translation: 'amaro-nonino',
        spiritType: SpiritType.None,
        abv: 35
    },
    {
        id: '117',
        translation: 'lagavulin-16y-whisky',
        spiritType: SpiritType.WiskeyScotch,
        abv: 43
    },
    { id: '118', translation: 'ginger', spiritType: SpiritType.None },
    {
        id: '119',
        translation: 'creme-de-menthe-green',
        spiritType: SpiritType.None,
        abv: 24
    },
    {
        id: '120',
        translation: 'creme-de-menthe-white',
        spiritType: SpiritType.None,
        abv: 24
    },
    {
        id: '121',
        translation: 'lillet-blanc',
        spiritType: SpiritType.None,
        abv: 17
    },
    {
        id: '122',
        translation: 'peychauds-bitters',
        spiritType: SpiritType.None,
        abv: 35
    },
    {
        id: '123',
        translation: 'cherry-liqueur',
        spiritType: SpiritType.None,
        abv: 24
    },
    {
        id: '124',
        translation: 'dom-benedictine',
        spiritType: SpiritType.None,
        abv: 40
    },
    { id: '125', translation: 'drambuie', spiritType: SpiritType.None, abv: 40 },
    { id: '126', translation: 'raspberry-syrup', spiritType: SpiritType.None },
    {
        id: '127',
        translation: 'pink-grapefruit-soda',
        spiritType: SpiritType.None
    },
    { id: '128', translation: 'espresso', spiritType: SpiritType.None },

    { id: '129', translation: 'strawberry-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '130', translation: 'apricot-brandy', spiritType: SpiritType.CognacBrandy, abv: 30 },
    { id: '131', translation: 'triple-sec', spiritType: SpiritType.None, abv: 35 },
    { id: '132', translation: 'southern-comfort', spiritType: SpiritType.None, abv: 35 },
    { id: '133', translation: 'blue-curacao', spiritType: SpiritType.None, abv: 25 },
    { id: '134', translation: 'grenadine', spiritType: SpiritType.None, abv: 0 },
    { id: '135', translation: 'cream-of-coconut', spiritType: SpiritType.None, abv: 20 },
    { id: '136', translation: 'white-cacao', spiritType: SpiritType.None, abv: 25 },
    { id: '137', translation: 'blackberry-brandy', spiritType: SpiritType.CognacBrandy, abv: 30 },
    { id: '138', translation: 'peach-vodka', spiritType: SpiritType.Vodka, abv: 40 },
    { id: '139', translation: 'peach-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '140', translation: 'midori-melon-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '141', translation: 'malibu-rum', spiritType: SpiritType.Rum, abv: 21 },
    { id: '142', translation: 'vanilla-liqueur', spiritType: SpiritType.None, abv: 25 },
    { id: '143', translation: 'jagermeister', spiritType: SpiritType.None, abv: 35 },
    { id: '144', translation: 'black-sambuca', spiritType: SpiritType.None, abv: 40 },
    { id: '145', translation: 'white-sambuca', spiritType: SpiritType.None, abv: 40 },
    { id: '146', translation: 'green-creme-de-menthe', spiritType: SpiritType.None, abv: 25 },
    { id: '147', translation: 'white-creme-de-menthe', spiritType: SpiritType.None, abv: 25 },
    { id: '148', translation: 'blue-maui', spiritType: SpiritType.None, abv: 20 },
    { id: '149', translation: 'kiwi-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '150', translation: 'wildberry-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '151', translation: 'absolut-citron', spiritType: SpiritType.Vodka, abv: 40 },
    { id: '152', translation: 'irish-cream', spiritType: SpiritType.None, abv: 17 },
    { id: '153', translation: 'green-creme-de-menthe', spiritType: SpiritType.None, abv: 25 },
    { id: '154', translation: 'white-creme-de-menthe', spiritType: SpiritType.None, abv: 25 },
    { id: '155', translation: 'blue-maui', spiritType: SpiritType.None, abv: 20 },
    { id: '156', translation: 'kiwi-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '157', translation: 'wildberry-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '158', translation: 'absolut-citron', spiritType: SpiritType.Vodka, abv: 40 },
    { id: '159', translation: 'irish-cream', spiritType: SpiritType.None, abv: 17 },
    { id: '160', translation: 'peachtree-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '161', translation: 'blackcurrant-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '162', translation: 'blackcurrant-cordial', spiritType: SpiritType.None, abv: 0 },
    { id: '163', translation: 'anisette', spiritType: SpiritType.None, abv: 25 },
    { id: '164', translation: 'passion-fruit-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '165', translation: 'passion-fruit-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '166', translation: 'apple-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '167', translation: 'peppermint-extract', spiritType: SpiritType.None, abv: 0 },
    { id: '168', translation: 'vanilla-vodka', spiritType: SpiritType.Vodka, abv: 40 },
    { id: '169', translation: 'cherry-heering', spiritType: SpiritType.None, abv: 24 },
    { id: '170', translation: 'white-cranberry-juice', spiritType: SpiritType.None, abv: 0 },
    { id: '171', translation: 'black-sambuca', spiritType: SpiritType.None, abv: 40 },
    { id: '172', translation: 'vanilla-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '173', translation: 'cinnamon-schnapps', spiritType: SpiritType.None, abv: 15 },
    { id: '174', translation: 'melon-vodka', spiritType: SpiritType.Vodka, abv: 40 },
    { id: '175', translation: 'cherry-brandy', spiritType: SpiritType.CognacBrandy, abv: 25 },
    { id: '176', translation: 'peach-nectar', spiritType: SpiritType.None, abv: 0 },
    { id: '177', translation: 'white-wine', spiritType: SpiritType.None, abv: 12 },
    { id: '178', translation: 'blue-curacao', spiritType: SpiritType.None, abv: 25 },
    { id: '179', translation: 'banana-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '180', translation: 'blackcurrant-vodka', spiritType: SpiritType.Vodka, abv: 40 },
    { id: '181', translation: 'raspberry-vodka', spiritType: SpiritType.Vodka, abv: 40 },
    { id: '182', translation: 'green-ginger-wine', spiritType: SpiritType.None, abv: 13 },
    { id: '183', translation: 'chocolate-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '184', translation: 'kiwi-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '185', translation: 'whiskey', spiritType: SpiritType.WiskeyScotch, abv: 40 },
    { id: '186', translation: 'blackberry-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '187', translation: 'peach-bitters', spiritType: SpiritType.None, abv: 45 },
    { id: '188', translation: 'grape-soda', spiritType: SpiritType.None, abv: 0 },
    { id: '189', translation: 'apple-brandy', spiritType: SpiritType.CognacBrandy, abv: 40 },
    { id: '190', translation: 'apricot-nectar', spiritType: SpiritType.None, abv: 0 },
    { id: '191', translation: 'blackcurrant-tea', spiritType: SpiritType.None, abv: 0 },
    { id: '192', translation: 'blackcurrant-cordial', spiritType: SpiritType.None, abv: 0 },
    { id: '193', translation: 'blue-maui', spiritType: SpiritType.None, abv: 20 },
    { id: '194', translation: 'blueberries', spiritType: SpiritType.None, abv: 0 },
    { id: '195', translation: 'bourbon', spiritType: SpiritType.WiskeyScotch, abv: 40 },
    { id: '196', translation: 'brown-sugar', spiritType: SpiritType.None, abv: 0 },
    { id: '197', translation: 'butter', spiritType: SpiritType.None, abv: 0 },
    { id: '198', translation: 'cachaca', spiritType: SpiritType.None, abv: 40 },
    { id: '199', translation: 'candy', spiritType: SpiritType.None, abv: 0 },
    { id: '200', translation: 'cantaloupe', spiritType: SpiritType.None, abv: 0 },
    { id: '201', translation: 'caramel-sauce', spiritType: SpiritType.None, abv: 0 },
    { id: '202', translation: 'carbonated-soft-drink', spiritType: SpiritType.None, abv: 0 },
    { id: '203', translation: 'cardamom', spiritType: SpiritType.None, abv: 0 },
    { id: '204', translation: 'champagne', spiritType: SpiritType.None, abv: 12 },
    { id: '205', translation: 'cherry', spiritType: SpiritType.None, abv: 0 },
    { id: '206', translation: 'cherry-juice', spiritType: SpiritType.None, abv: 0 },
    { id: '207', translation: 'cherry-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '208', translation: 'chocolate-milk', spiritType: SpiritType.None, abv: 0 },
    { id: '209', translation: 'chocolate-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '210', translation: 'cider', spiritType: SpiritType.None, abv: 5 },
    { id: '211', translation: 'cinnamon', spiritType: SpiritType.None, abv: 0 },
    { id: '212', translation: 'clove', spiritType: SpiritType.None, abv: 0 },
    { id: '213', translation: 'club-soda', spiritType: SpiritType.None, abv: 0 },
    { id: '214', translation: 'coconut-cream', spiritType: SpiritType.None, abv: 0 },
    { id: '215', translation: 'coconut-milk', spiritType: SpiritType.None, abv: 0 },
    { id: '216', translation: 'coconut-rum', spiritType: SpiritType.Rum, abv: 21 },
    { id: '217', translation: 'coffee', spiritType: SpiritType.None, abv: 0 },
    { id: '218', translation: 'coffee-liqueur', spiritType: SpiritType.None, abv: 20 },
    { id: '219', translation: 'coffee-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '220', translation: 'cognac', spiritType: SpiritType.None, abv: 40 },
    { id: '221', translation: 'cointreau', spiritType: SpiritType.None, abv: 40 },
    { id: '222', translation: 'cola', spiritType: SpiritType.None, abv: 0 },
    { id: '223', translation: 'cold-water', spiritType: SpiritType.None, abv: 0 },
    { id: '224', translation: 'condensed-milk', spiritType: SpiritType.None, abv: 0 },
    { id: '225', translation: 'coriander', spiritType: SpiritType.None, abv: 0 },
    { id: '226', translation: 'corn-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '227', translation: 'cream', spiritType: SpiritType.None, abv: 0 },
    { id: '228', translation: 'cream-of-coconut', spiritType: SpiritType.None, abv: 0 },
    { id: '229', translation: 'creme-de-almond', spiritType: SpiritType.None, abv: 25 },
    { id: '230', translation: 'creme-de-banane', spiritType: SpiritType.None, abv: 25 },
    { id: '231', translation: 'creme-de-cassis', spiritType: SpiritType.None, abv: 20 },
    { id: '232', translation: 'creme-de-noya', spiritType: SpiritType.None, abv: 25 },
    { id: '233', translation: 'creme-fraiche', spiritType: SpiritType.None, abv: 0 },
    { id: '234', translation: 'crown-royal', spiritType: SpiritType.WiskeyScotch, abv: 40 },
    { id: '235', translation: 'crystal-light', spiritType: SpiritType.None, abv: 0 },
    { id: '236', translation: 'cubed-sugar', spiritType: SpiritType.None, abv: 0 },
    { id: '237', translation: 'cucumber', spiritType: SpiritType.None, abv: 0 },
    { id: '238', translation: 'cumin-powder', spiritType: SpiritType.None, abv: 0 },
    { id: '239', translation: 'cumin-seed', spiritType: SpiritType.None, abv: 0 },
    { id: '240', translation: 'curacao', spiritType: SpiritType.None, abv: 30 },
    { id: '241', translation: 'daiquiri-mix', spiritType: SpiritType.None, abv: 0 },
    { id: '242', translation: 'dark-chocolate', spiritType: SpiritType.None, abv: 0 },
    { id: '243', translation: 'dark-rum', spiritType: SpiritType.Rum, abv: 40 },
    { id: '244', translation: 'demerara-sugar', spiritType: SpiritType.None, abv: 0 },
    { id: '245', translation: 'dr-pepper', spiritType: SpiritType.None, abv: 0 },
    { id: '246', translation: 'dried-oregano', spiritType: SpiritType.None, abv: 0 },
    { id: '247', translation: 'dry-vermouth', spiritType: SpiritType.None, abv: 18 },
    { id: '248', translation: 'dubonnet-rouge', spiritType: SpiritType.None, abv: 15 },
    { id: '249', translation: 'dubonnet-blanc', spiritType: SpiritType.None, abv: 15 },
    { id: '250', translation: 'egg-white', spiritType: SpiritType.None, abv: 0 },
    { id: '251', translation: 'egg-yolk', spiritType: SpiritType.None, abv: 0 },
    { id: '252', translation: 'eggnog', spiritType: SpiritType.None, abv: 0 },
    { id: '253', translation: 'english-gin', spiritType: SpiritType.Gin, abv: 40 },
    { id: '254', translation: 'espresso', spiritType: SpiritType.None, abv: 0 },
    { id: '255', translation: 'everclear', spiritType: SpiritType.None, abv: 95 },
    { id: '256', translation: 'fanta', spiritType: SpiritType.None, abv: 0 },
    { id: '257', translation: 'fennel-seeds', spiritType: SpiritType.None, abv: 0 },
    { id: '258', translation: 'firewater', spiritType: SpiritType.None, abv: 50 },
    { id: '259', translation: 'flaked-almonds', spiritType: SpiritType.None, abv: 0 },
    { id: '260', translation: 'food-coloring', spiritType: SpiritType.None, abv: 0 },
    { id: '261', translation: 'forbidden-fruit', spiritType: SpiritType.None, abv: 30 },
    { id: '262', translation: 'fresh-basil', spiritType: SpiritType.None, abv: 0 },
    { id: '263', translation: 'fresh-lemon-juice', spiritType: SpiritType.None, abv: 0 },
    { id: '264', translation: 'fresh-lime-juice', spiritType: SpiritType.None, abv: 0 },
    { id: '265', translation: 'fresh-mint', spiritType: SpiritType.None, abv: 0 },
    { id: '266', translation: 'fresca', spiritType: SpiritType.None, abv: 0 },
    { id: '267', translation: 'fruit', spiritType: SpiritType.None, abv: 0 },
    { id: '268', translation: 'fruit-juice', spiritType: SpiritType.None, abv: 0 },
    { id: '269', translation: 'fruit-punch', spiritType: SpiritType.None, abv: 0 },
    { id: '270', translation: 'fruit-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '271', translation: 'galliano', spiritType: SpiritType.None, abv: 42.3 },
    { id: '272', translation: 'gatorade', spiritType: SpiritType.None, abv: 0 },
    { id: '273', translation: 'ginger', spiritType: SpiritType.None, abv: 0 },
    { id: '274', translation: 'ginger-ale', spiritType: SpiritType.None, abv: 0 },
    { id: '275', translation: 'ginger-beer', spiritType: SpiritType.None, abv: 0 },
    { id: '276', translation: 'ginger-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '277', translation: 'ginseng', spiritType: SpiritType.None, abv: 0 },
    { id: '278', translation: 'grape-juice', spiritType: SpiritType.None, abv: 0 },
    { id: '279', translation: 'grape-juice', spiritType: SpiritType.None, abv: 0 },
    { id: '280', translation: 'hazelnut-syrup', spiritType: SpiritType.None, abv: 0 },
    { id: '281', translation: 'rose-water', spiritType: SpiritType.None, abv: 0 },
    { id: '282', translation: 'orange-blossom-water', spiritType: SpiritType.None, abv: 0 },
    { id: '283', translation: 'tamarind', spiritType: SpiritType.None, abv: 0 },
    { id: '284', translation: 'date', spiritType: SpiritType.None, abv: 0 },
    { id: '285', translation: 'fig', spiritType: SpiritType.None, abv: 0 },
    { id: '286', translation: 'raisin', spiritType: SpiritType.None, abv: 0 },
    { id: '287', translation: 'currant', spiritType: SpiritType.None, abv: 0 },
    { id: '288', translation: 'apricot', spiritType: SpiritType.None, abv: 0 },
    { id: '289', translation: 'plum', spiritType: SpiritType.None, abv: 0 },
    { id: '290', translation: 'gooseberry', spiritType: SpiritType.None, abv: 0 },
    { id: '291', translation: 'elderberry', spiritType: SpiritType.None, abv: 0 },
    { id: '292', translation: 'acai-berry', spiritType: SpiritType.None, abv: 0 },
    { id: '293', translation: 'goji-berry', spiritType: SpiritType.None, abv: 0 },
    { id: '294', translation: 'sea-buckthorn-berry', spiritType: SpiritType.None, abv: 0 },
    { id: '295', translation: 'mulberry', spiritType: SpiritType.None, abv: 0 },
    { id: '296', translation: 'boysenberry', spiritType: SpiritType.None, abv: 0 },
    { id: '297', translation: 'loganberry', spiritType: SpiritType.None, abv: 0 },
    { id: '298', translation: 'dewberry', spiritType: SpiritType.None, abv: 0 },
    { id: '299', translation: 'cloudberry', spiritType: SpiritType.None, abv: 0 },
    { id: '300', translation: 'barberry', spiritType: SpiritType.None, abv: 0 },
    { id: '301', translation: 'bearberry', spiritType: SpiritType.None, abv: 0 },
    { id: '302', translation: 'bilberry', spiritType: SpiritType.None, abv: 0 },
    { id: '303', translation: 'huckleberry', spiritType: SpiritType.None, abv: 0 },
    { id: '304', translation: 'lingonberry', spiritType: SpiritType.None, abv: 0 },
    { id: '305', translation: 'serviceberry', spiritType: SpiritType.None, abv: 0 },
    { id: '306', translation: 'buffaloberry', spiritType: SpiritType.None, abv: 0 },
    { id: '307', translation: 'chokeberry', spiritType: SpiritType.None, abv: 0 },
    { id: '308', translation: 'cowberry', spiritType: SpiritType.None, abv: 0 }
];
