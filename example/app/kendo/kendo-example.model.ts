import {
    DynamicCheckboxModel,
    DynamicCheckboxGroupModel,
    DynamicDatePickerModel,
    DynamicFileUploadModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicSliderModel,
    DynamicTextAreaModel,
    DynamicTimePickerModel
} from "@ng2-dynamic-forms/core";

export const KENDO_EXAMPLE_MODEL = [

    new DynamicFormGroupModel(
        {
            id: "stay",
            group: [

                new DynamicDatePickerModel(
                    {
                        id: "arrivalDate",
                        inline: false,
                        label: "Arrival",
                        placeholder: "Date of Arrival"
                    }
                ),

                new DynamicDatePickerModel(
                    {
                        id: "departureDate",
                        inline: false,
                        label: "Departure",
                        placeholder: "Date of Departure"
                    }
                ),
            ]
        }
    ),

    new DynamicSelectModel<string>(
        {
            id: "room",
            label: "Room",
            options: [
                {
                    label: "Single Room",
                    value: "single-room"
                },
                {
                    label: "Double Room",
                    value: "double-room"
                },
                {
                    label: "Business Suite",
                    value: "business-suite"
                },
                {
                    label: "Presidential Suite",
                    value: "presidential-suite"
                },
                {
                    label: "Storeroom",
                    value: "storeroom"
                }
            ]
        }
    ),

    new DynamicInputModel(
        {
            id: "firstName",
            hint: "Just a hint",
            label: "First Name",
            placeholder: "First Name",
            validators: {
                required: null
            },
            errorMessages: {
                required: "{{label}} is required"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "lastName",
            label: "Last Name",
            placeholder: "Last Name",
            validators: {
                required: null
            },
            errorMessages: {
                required: "{{label}} is required"
            }
        }
    ),

    new DynamicFormGroupModel(
        {
            id: "addressStreet",
            group: [

                new DynamicInputModel(
                    {
                        id: "streetName",
                        label: "Street Name",
                        placeholder: "Street Name"
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "streetNumber",
                        inputType: "number",
                        label: "Street Number",
                        placeholder: "Number",
                        min: 0,
                        max: 999,
                        step: 1,
                        value: 1
                    }
                )
            ]
        }
    ),

    new DynamicFormGroupModel(
        {
            id: "addressLocation",
            group: [

                new DynamicInputModel(
                    {
                        id: "zipCode",
                        label: "Zip Code",
                        placeholder: "ZIP"
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "state",
                        label: "State",
                        list: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
                        placeholder: "State"
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "city",
                        label: "City",
                        placeholder: "City"
                    }
                )
            ]
        }
    ),

    new DynamicCheckboxGroupModel(
        {
            id: "extras",
            legend: "Extras",
            group: [
                new DynamicCheckboxModel(
                    {
                        id: "extraBreakfast",
                        label: "Breakfast"
                    }
                ),
                new DynamicCheckboxModel(
                    {
                        id: "extraTV",
                        label: "TV",
                    }
                ),
                new DynamicCheckboxModel(
                    {
                        id: "extraWiFi",
                        label: "WiFi"
                    }
                ),
                new DynamicCheckboxModel(
                    {
                        id: "extraParking",
                        label: "Parking Lot"
                    }
                ),
                new DynamicCheckboxModel(
                    {
                        id: "extraBalcony",
                        label: "Balcony"
                    }
                )
            ]
        }
    ),

    new DynamicRadioGroupModel<string>(
        {
            id: "payment",
            legend: "Payment Method",
            options: [
                {
                    label: "Credit Card",
                    value: "cc"
                },
                {
                    label: "PayPal",
                    value: "paypal"
                },
                {
                    label: "Cash",
                    value: "cash"
                },
                {
                    label: "Bitcoin",
                    value: "bitcoin"
                }
            ],
            value: "cc"
        }
    ),

    new DynamicSliderModel(
        {
            id: "kendoSlider",
            label: "Slider",

            step: 1,
            value: 3
        }
    ),

    new DynamicSwitchModel(
        {
            id: "kendoSwitch",
            label: "Switch",
            offLabel: "Off",
            onLabel: "On",
            value: true
        }
    ),

    new DynamicTimePickerModel(
        {
            id:"arrivalTime",
            label: "Estimated Arrival Time",
            format: "HH:mm"
        }
    ),

    new DynamicFileUploadModel(
        {
            autoUpload: true,
            id: "attachements",
            label: "Attachements",
            multiple: true,
            removeUrl: "removeUrl",
            url: "saveUrl"
        }
    ),

    new DynamicTextAreaModel(
        {
            id: "notes",
            label: "Notes",
            rows: 5,
            placeholder: "Additional Notes"
        }
    ),
];