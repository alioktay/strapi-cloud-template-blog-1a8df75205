import type { Schema, Struct } from '@strapi/strapi';

export interface ApplicationAgeGroupRange extends Struct.ComponentSchema {
  collectionName: 'age_group_range';
  info: {
    description: 'Defines an age group with birth year range';
    displayName: 'Age Group Range';
    icon: 'user';
    name: 'age-group-range';
  };
  attributes: {
    age_group: Schema.Attribute.Enumeration<
      ['U11', 'U13', 'U15', 'U17', 'U19', 'U21']
    >;
    birth_year_from: Schema.Attribute.Integer;
    birth_year_to: Schema.Attribute.Integer;
  };
}

export interface MediaMediaItem extends Struct.ComponentSchema {
  collectionName: 'media_media_item';
  info: {
    description: 'Media item with file and caption';
    displayName: 'Media Item';
    icon: 'image';
    name: 'media-item';
  };
  attributes: {
    caption: Schema.Attribute.String;
    file: Schema.Attribute.Media;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'application.age-group-range': ApplicationAgeGroupRange;
      'media.media-item': MediaMediaItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
