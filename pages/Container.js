import Head from 'next/head';
import Link from 'next/link';
// import Navbar from ‘./Navbar’;
const Layout = (props) => (
  <div>
    <Head>
      <title>My first NextJS project</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
     </Head>
    <div>
      <Link href='/'><a>Home</a></Link><p>   </p>
      <Link href='/about'><a>about</a></Link>
    </div>
    {props.children}
  </div>
);
export default Layout;