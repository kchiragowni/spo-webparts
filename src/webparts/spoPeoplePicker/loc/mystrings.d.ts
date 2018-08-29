declare interface ISpoPeoplePickerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  TypePickerLabel: string;
  principalTypeUserLabel: string;
  principalTypeSharePointGroupLabel: string;
  principalTypeSecurityGroupLabel: string;
  principalTypeDistributionListLabel: string;
  numberOfItemsFieldLabel: string;
}

declare module 'SpoPeoplePickerWebPartStrings' {
  const strings: ISpoPeoplePickerWebPartStrings;
  export = strings;
}
