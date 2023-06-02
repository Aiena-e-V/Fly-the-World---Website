import { A320Header } from '../components/home/A320Header';
import { Installer } from '../components/home/Installer';
import { Community } from '../components/home/Community';
import { Donate } from '../components/home/Donate';
import { Features } from '../components/projects/A32NX/Features';
import { ExtendedFeatures } from '../components/projects/A32NX/ExtendedFeatures';


const Index = () => (
    <>
        <A320Header />
        <Features />
        <ExtendedFeatures />
        <Installer />
        <Donate />
    </>
);

export default Index;
