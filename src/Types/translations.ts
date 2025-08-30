type Field = {
  label: string;
  placeholder: string;
  validation?: {
    required: string;
    invalid?: string;
  };
};

export type Translations = {
  logo: string;
  home: {
    hero: {
      title: string;
      description: string;
      shoppingNow: string;
      about: string;
      welcome: string;
      welcome2: string;
    };

    about: {
      ourStory: string;
      aboutUs: string;
      descriptions: {
        one: string;
        two: string;
        three: string;
      };
    };
    contact: {
      DontHesitate: string;
      contactUs: string;
    };
  };
  navbar: {
    home: string;
    about: string;
    menu: string;
    contact: string;
    login: string;
    register: string;
    signOut: string;
    profile: string;
    admin: string;
    essentialPlaces: string;
    touristSpots: string;
    realEstate: string;
  };
  auth: {
    login: {
      title: string;
      name: Field;
      email: Field;
      password: Field;
      submit: string;
      authPrompt: {
        message: string;
        signUpLinkText: string;
      };
    };
    register: {
      title: string;
      name: Field;
      email: Field;
      password: Field;
      confirmPassword: Field;
      submit: string;
      authPrompt: {
        message: string;
        loginLinkText: string;
      };
    };
  };
  validation: {
    nameRequired: string;
    validEmail: string;
    passwordMinLength: string;
    passwordMaxLength: string;
    confirmPasswordRequired: string;
    passwordMismatch: string;
  };

  messages: {
    userNotFound: string;
    incorrectPassword: string;
    loginSuccessful: string;
    unexpectedError: string;
    userAlreadyExists: string;
    accountCreated: string;
    updateProfileSucess: string;
    categoryAdded: string;
    updatecategorySucess: string;
    deleteCategorySucess: string;
    deletePlaceSuccess: string;
    placeAdded: string;
    updatePlaceSuccess: string;
    updateUserSucess: string;
    deleteUserSucess: string;
  };
  menuItem: {
    addToCart: string;
  };

  profile: {
    title: string;
    form: {
      name: Field;
      email: Field;
      phone: Field;
      address: Field;
      postalCode: Field;
      city: Field;
      country: Field;
    };
  };
  admin: {
    tabs: {
      profile: string;
      categories: string;
      menuItems: string;
      orders: string;
      users: string;
      places: string;
    };
    categories: {
      form: {
        editName: string;
        name: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
      };
    };
    "menu-items": {
      addItemSize: string;
      createNewMenuItem: string;
      addExtraItem: string;
      menuOption: {
        name: string;
        extraPrice: string;
      };
      form: {
        name: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
        description: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
        basePrice: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
        category: {
          validation: {
            required: string;
          };
        };
        image: {
          validation: {
            required: string;
          };
        };
      };
    };
  };
  category: string;
  save: string;
  edit: string;
  delete: string;
  cancel: string;
  sizes: string;
  extrasIngredients: string;
  cart:{
    title: string;
    noItemsInCart: string;
  }
  
  create: string;

  cardDetails: {
    name: string;
    phone: string;
    region: string;
    address: string;
    category: string;
    description: string;
  };
  filterComponent: {
    selectRegion: string;
    selectCategory: string;
    all: string;
  };

  touristSpots: {
    title: string;
    RESTAURANT: string;
    HOTEL: string;
    BEACH: string;
    GARDEN: string;
  };
  essentialPlaces: {
    title: string;
    subtitle: string;
    CLOTHING: string;
    PHARMACIES: string;
    HOSPITALS: string;
  };
  realEstate: {
    title: string;
    APARTMENT: string;
  };

  copyRight: string;
  noCategoriesFound: string;
  noPlacesFound: string;
};
