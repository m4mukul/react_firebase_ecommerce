import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
   theme: {
     extend: {},
   },
   plugins: [],
 });
 