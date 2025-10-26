// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the POCcomponentSitecoreTwo component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function POCcomponentSitecoreTwo(manifest: Manifest): void {
  manifest.addComponent({
    name: 'POCcomponentSitecoreTwo',
    icon: SitecoreIcon.DocumentTag,
    fields: [   { name: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'Description', type: CommonFieldTypes.RichText },
      { name: 'Image', type: CommonFieldTypes.Image },
      { name: 'CtaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'PublishedDate', type: CommonFieldTypes.DateTime },
      { name: 'ShowBadge', type: CommonFieldTypes.Checkbox },
      { name: 'Tags', type: CommonFieldTypes.ContentList }, // will point to items with Title field
      { name: 'Category', type: CommonFieldTypes.SingleLineText },],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
