/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { SoloRegistration } from "../API.ts";
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
export declare type SoloRegistrationUpdateFormInputValues = {
    category?: string;
};
export declare type SoloRegistrationUpdateFormValidationValues = {
    category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SoloRegistrationUpdateFormOverridesProps = {
    SoloRegistrationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SoloRegistrationUpdateFormProps = React.PropsWithChildren<{
    overrides?: SoloRegistrationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    soloRegistration?: SoloRegistration;
    onSubmit?: (fields: SoloRegistrationUpdateFormInputValues) => SoloRegistrationUpdateFormInputValues;
    onSuccess?: (fields: SoloRegistrationUpdateFormInputValues) => void;
    onError?: (fields: SoloRegistrationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SoloRegistrationUpdateFormInputValues) => SoloRegistrationUpdateFormInputValues;
    onValidate?: SoloRegistrationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SoloRegistrationUpdateForm(props: SoloRegistrationUpdateFormProps): React.ReactElement;
