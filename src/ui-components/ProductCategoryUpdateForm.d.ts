/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProductCategory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCategoryUpdateFormInputValues = {
    name?: string;
    image?: string;
    point?: number;
};
export declare type ProductCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    point?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCategoryUpdateFormOverridesProps = {
    ProductCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    point?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productCategory?: ProductCategory;
    onSubmit?: (fields: ProductCategoryUpdateFormInputValues) => ProductCategoryUpdateFormInputValues;
    onSuccess?: (fields: ProductCategoryUpdateFormInputValues) => void;
    onError?: (fields: ProductCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCategoryUpdateFormInputValues) => ProductCategoryUpdateFormInputValues;
    onValidate?: ProductCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCategoryUpdateForm(props: ProductCategoryUpdateFormProps): React.ReactElement;
