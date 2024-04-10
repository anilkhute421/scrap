/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCategoryCreateFormInputValues = {
    name?: string;
    image?: string;
    point?: number;
};
export declare type ProductCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    point?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCategoryCreateFormOverridesProps = {
    ProductCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    point?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCategoryCreateFormInputValues) => ProductCategoryCreateFormInputValues;
    onSuccess?: (fields: ProductCategoryCreateFormInputValues) => void;
    onError?: (fields: ProductCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCategoryCreateFormInputValues) => ProductCategoryCreateFormInputValues;
    onValidate?: ProductCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCategoryCreateForm(props: ProductCategoryCreateFormProps): React.ReactElement;
