import { RiLoader3Fill } from "react-icons/ri";
const Loader = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<RiLoader3Fill className="text-WinterWizard h-16 w-16 animate-spin"></RiLoader3Fill>
		</div>
	);
};

export default Loader;
