import { FETCH_PACKAGES } from "../actions/actionTypes";

const initialState = {
  packages: [
    {
      id: 1,
      title: "Four days in France",
      description: "Visit France",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      price: 400,
      destination: "France",
      duration: 6
    },
    {
      id: 2,
      title: "Lebanon for the weekend",
      description: "Visit Lebanon",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      price: 400,
      destination: "Lebanon",
      duration: 6
    },
    {
      id: 3,
      title: "Four days in Kuwait",
      description: "Visit Kuwait",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      price: 400,
      destination: "Kuwait",
      duration: 6
    },
    {
      id: 4,
      title: "Four days in Dubai",
      description: "Visit Dubai",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      price: 400,
      destination: "Dubai",
      duration: 6
    }
  ],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PACKAGES:
      return { ...state, packages: payload };
    default:
      return state;
  }
};
