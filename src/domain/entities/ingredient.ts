import { SpiritType } from 'domain/enums/spirit-type';

export class StaticIngredient {
    public id: string;
    public translation: string;
    public spiritType?: SpiritType;
    public abv?: number;
    public recipeId?: string;
    public density?: number;
    public replacementIds?: string[];
}

export class Ingredient extends StaticIngredient {
    public name: string;
    public tapNumber?: number;
}

export class ManageIngredientModel extends Ingredient {
    public isActive: boolean;
}

export class CreatedIngredientModel extends Ingredient {
    public usedInCocktailNames: string[];
}
