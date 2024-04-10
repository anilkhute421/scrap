/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { School } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SchoolUpdateFormInputValues = {
    name?: string;
    type?: string;
    stage?: string;
    medium?: string[];
    approved?: boolean;
    address?: string;
    address1?: string;
    address2?: string;
    zone?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    primaryContact?: string;
};
export declare type SchoolUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    stage?: ValidationFunction<string>;
    medium?: ValidationFunction<string>;
    approved?: ValidationFunction<boolean>;
    address?: ValidationFunction<string>;
    address1?: ValidationFunction<string>;
    address2?: ValidationFunction<string>;
    zone?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    postal_code?: ValidationFunction<string>;
    primaryContact?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SchoolUpdateFormOverridesProps = {
    SchoolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    stage?: PrimitiveOverrideProps<SelectFieldProps>;
    medium?: PrimitiveOverrideProps<SelectFieldProps>;
    approved?: PrimitiveOverrideProps<SwitchFieldProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    address1?: PrimitiveOverrideProps<TextFieldProps>;
    address2?: PrimitiveOverrideProps<TextFieldProps>;
    zone?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    postal_code?: PrimitiveOverrideProps<TextFieldProps>;
    primaryContact?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type SchoolUpdateFormProps = React.PropsWithChildren<{
    overrides?: SchoolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    school?: School;
    onSubmit?: (fields: SchoolUpdateFormInputValues) => SchoolUpdateFormInputValues;
    onSuccess?: (fields: SchoolUpdateFormInputValues) => void;
    onError?: (fields: SchoolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SchoolUpdateFormInputValues) => SchoolUpdateFormInputValues;
    onValidate?: SchoolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SchoolUpdateForm(props: SchoolUpdateFormProps): React.ReactElement;
