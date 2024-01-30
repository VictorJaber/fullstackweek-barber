import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";


const Header = () => {
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between flex items-center flex-row">
                <Image src="/logo.png" alt="FSW Barber" height={22} width={120}/>
                <Button variant="outline" size="icon">
                    <MenuIcon  size={20}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;