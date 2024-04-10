/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SchoolUser } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SchoolUserUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    role?: string;
};
export declare type SchoolUserUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SchoolUserUpdateFormOverridesProps = {
    SchoolUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SchoolUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: SchoolUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    schoolUser?: SchoolUser;
    onSubmit?: (fields: SchoolUserUpdateFormInputValues) => SchoolUserUpdateFormInputValues;
    onSuccess?: (fields: SchoolUserUpdateFormInputValues) => void;
    onError?: (fields: SchoolUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SchoolUserUpdateFormInputValues) => SchoolUserUpdateFormInputValues;
    onValidate?: SchoolUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SchoolUserUpdateForm(props: SchoolUserUpdateFormProps): React.ReactElement;
