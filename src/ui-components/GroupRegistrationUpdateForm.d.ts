/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { GroupRegistration } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GroupRegistrationUpdateFormInputValues = {
    category?: string;
    raceNumber?: string;
};
export declare type GroupRegistrationUpdateFormValidationValues = {
    category?: ValidationFunction<string>;
    raceNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupRegistrationUpdateFormOverridesProps = {
    GroupRegistrationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    raceNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupRegistrationUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroupRegistrationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    groupRegistration?: GroupRegistration;
    onSubmit?: (fields: GroupRegistrationUpdateFormInputValues) => GroupRegistrationUpdateFormInputValues;
    onSuccess?: (fields: GroupRegistrationUpdateFormInputValues) => void;
    onError?: (fields: GroupRegistrationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupRegistrationUpdateFormInputValues) => GroupRegistrationUpdateFormInputValues;
    onValidate?: GroupRegistrationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroupRegistrationUpdateForm(props: GroupRegistrationUpdateFormProps): React.ReactElement;
