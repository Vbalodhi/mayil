import { Button } from "@/components/ui/button";
const ButtonsPage = () => {
    return(
        <div className="p-5 space-x-7">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="primaryOutline">Primary Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondaryOutline">Secondary Outline</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dangerOutline">Danger Outline</Button>
            <Button variant="super">Super</Button>
            <Button variant="superOutline">Super Outline</Button>
            <Button variant="sidebar">Sidebar</Button>
            <Button variant="sidebarOutline">Sidebar Outline</Button>
            <Button variant="ghost">ghost</Button>
        </div>
    );
};
export default ButtonsPage;
