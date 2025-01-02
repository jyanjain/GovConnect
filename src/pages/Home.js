// import React from 'react';
// import Navbar from '../components/Navbar';
// import ImageBanner from '../components/ImageBanner';
// import ButtonSection from '../components/ButtonSection';
// import SchemesSection from '../components/SchemesSection';


// function Home(){
//     return(
//         <div>
//             <Navbar />
//             <ImageBanner />
//             <ButtonSection />
//             <SchemesSection />
//         </div>
//     );
// }
// export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import ImageBanner from '../components/ImageBanner';
import ButtonSection from '../components/ButtonSection';
import SchemesSection from '../components/SchemesSection';

function Home() {
  // Define the links specific to the home page
  const homeLinks = [
    { href: "/discover", label: "Schemes" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div>
      {/* Pass the links to the Navbar */}
      <Navbar links={homeLinks} />
      <ImageBanner />
      <ButtonSection />
      <SchemesSection />
    </div>
  );
}

export default Home;
