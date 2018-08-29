import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  PropertyPaneTextField,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneToggle,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpoPeoplePickerWebPartStrings';
import SpoPeoplePicker from './components/SpoPeoplePicker';
import { ISpoPeoplePickerProps } from './components/ISpoPeoplePickerProps';
import { ISpoPeoplePickerWebPartProps } from './ISpoPeoplePickerWebPartProps';

export default class SpoPeoplePickerWebPart extends BaseClientSideWebPart<ISpoPeoplePickerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpoPeoplePickerProps > = React.createElement(
      SpoPeoplePicker,
      {
        description: this.properties.description,
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        typePicker: this.properties.typePicker,
        principalTypeUser: this.properties.principalTypeUser,
        principalTypeSharePointGroup: this.properties.principalTypeSharePointGroup,
        principalTypeSecurityGroup: this.properties.principalTypeSecurityGroup,
        principalTypeDistributionList: this.properties.principalTypeDistributionList,
        numberOfItems: this.properties.numberOfItems
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('typePicker', {
                  label: strings.TypePickerLabel,
                  selectedKey: "Normal",
                  options: [
                    { key: 'Normal', text: 'Normal' },
                    { key: 'Compact', text: 'Compact' }
                  ]
                }),
                PropertyPaneToggle('principalTypeUser', {
                    label: strings.principalTypeUserLabel,
                    checked: true,
                  }
                ),
                PropertyPaneToggle('principalTypeSharePointGroup', {
                    label: strings.principalTypeSharePointGroupLabel,
                    checked: true,
                  }
                ),
                PropertyPaneToggle('principalTypeSecurityGroup', {
                    label: strings.principalTypeSecurityGroupLabel,
                    checked: false,
                  }
                ),
                PropertyPaneToggle('principalTypeDistributionList', {
                    label: strings.principalTypeDistributionListLabel,
                    checked: false,
                  }
                ),
                PropertyPaneSlider('numberOfItems', {
                  label: strings.numberOfItemsFieldLabel,
                  min: 1,
                  max: 20,
                  step: 1
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
