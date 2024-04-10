/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SchoolUserCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    role?: string;
};
export declare type SchoolUserCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SchoolUserCreateFormOverridesProps = {
    SchoolUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SchoolUserCreateFormProps = React.PropsWithChildren<{
    overrides?: SchoolUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SchoolUserCreateFormInputValues) => SchoolUserCreateFormInputValues;
    onSuccess?: (fields: SchoolUserCreateFormInputValues) => void;
    onError?: (fields: SchoolUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SchoolUserCreateFormInputValues) => SchoolUserCreateFormInputValues;
    onValidate?: SchoolUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function SchoolUserCreateForm(props: SchoolUserCreateFormProps): React.ReactElement;
