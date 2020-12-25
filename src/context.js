import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import sublinks from './data';

const AppContext = React.createContext();

const postsData = JSON.parse(localStorage.getItem('posts'));

export const AppProvider = ({ children }) => {
	const history = useHistory();
	const [isAuthenticated, setIsAutheticated] = useState(false);
	const [loginModal, setLoginModal] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: '', links: [] });
	const [posts, setPosts] = useState(postsData || []);
	const [Type, setType] = useState('');
	const [FullName, setFullName] = useState('');
	const [Gender, setGender] = useState('');
	const [Height, setHeight] = useState('');
	const [Weight, setWeight] = useState('');
	const [BirthDay, setBirthDay] = useState('');
	const [ZipCode, setZipCode] = useState('');
	const [Phone, setPhone] = useState('');
	const [Email, setEmail] = useState('');
	const [Smoker, setSmoker] = useState('');
	const [Qualify, setQualify] = useState('');
	const [HouseHoldIncome, setHouseHoldIncome] = useState('');
	const [HouseHoldSize, setHouseHoldSize] = useState('');
	const [HealthCondition, setHealthCondition] = useState('');
	const [MedicareStatus, setMedicareStatus] = useState('');
	const [MedicareProducts, setMedicareProducts] = useState('');

	/* ********** Form On Change************/
	const handleFullName = (e) => {
		setFullName(e.target.value);
	};
	const handleGender = (e) => {
		setGender(e.target.value);
	};
	const handleHeight = (e) => {
		setHeight(e.target.value);
	};
	const handleWeight = (e) => {
		setWeight(e.target.value);
	};
	const handleBirthDay = (e) => {
		setBirthDay(e.target.value);
	};
	const handleZipCode = (e) => {
		setZipCode(e.target.value);
	};
	const handlePhone = (e) => {
		setPhone(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleSmoker = (e) => {
		setSmoker(e.target.value);
	};
	const handleQualify = (e) => {
		setQualify(e.target.value);
	};
	const handleHouseHoldSize = (e) => {
		setHouseHoldSize(e.target.value);
	};
	const handleHouseHoldIncome = (e) => {
		setHouseHoldIncome(e.target.value);
	};
	const handleHealthCondition = (e) => {
		setHealthCondition(e.target.value);
	};
	const handleMedicareProducts = (e) => {
		setMedicareProducts(e.target.value);
	};
	const handleMedicareStatus = (e) => {
		setMedicareStatus(e.target.value);
	};
	const handleType = (e) => {
		setType(e.target.value);
	};
	/*********** Form Handling Event  ********/

	//let's create the method to add the post on a list
	const AddPost = (e) => {
		e.preventDefault();
		setPosts([
			//the spread operator let us populate our array with the previous post
			...posts,
			{
				Type,
				FullName,
				Gender,
				Height,
				Weight,
				BirthDay,
				ZipCode,
				Phone,
				Email,
				Smoker,
				Qualify,
				HouseHoldIncome,
				HouseHoldSize,
				HealthCondition,
				MedicareProducts,
				MedicareStatus,
			},
		]);
		/*** let send our user to the thank you page after submiting the form ***/
		history.push('/Thankyou');
	};
	const removePost = (Type) => {
		/** removePost take Type as argument let's reset the post list after filtering
      post Type which are not equal to Type  ***/
		setPosts(posts.filter((item) => item.Type !== Type));
	};
	/**  we use useeffect to save the post in our locastorage with the method setIntem()
  The post is save in a JSON.stringifiý format and we wil need to parse it before
  use it after collecting it with getItem() method   ***/
	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	});

	/**********Authentication ********/
	const login = (e) => {
		e.preventDefault();
		setIsAutheticated(true);
		history.push('/AdminUser/AdminUser');
	};

	const logout = (e) => {
		e.preventDefault();
		setIsAutheticated(false);
	};
	/************ End Of Authentication  ********/

	/* ****Navbar, Sidebar, submenu context ****    */
	const toggle = () => setLoginModal(!loginModal);
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};
	/*********The end ********/

	return (
		<AppContext.Provider
			value={{
				/******* Navbar SideBar, Submenu Provider ******/
				isSubmenuOpen,
				isSidebarOpen,
				isAuthenticated,
				location,
				page,
				toggle,
				openSubmenu,
				openSidebar,
				closeSubmenu,
				closeSidebar,
				/******** Login Form Modal Provider ******/
				login,
				logout,
				loginModal,
				/******** Form Context Provider ******/
				AddPost,
				removePost,
				handleFullName,
				handleGender,
				handleBirthDay,
				handleHeight,
				handleWeight,
				handlePhone,
				handleEmail,
				handleSmoker,
				handleQualify,
				handleHouseHoldIncome,
				handleHouseHoldSize,
				handleHealthCondition,
				handleMedicareProducts,
				handleMedicareStatus,
				handleZipCode,
				handleType,
				posts,
				FullName,
				Gender,
				BirthDay,
				Height,
				Weight,
				ZipCode,
				Phone,
				Email,
				Smoker,
				Qualify,
				HouseHoldIncome,
				HouseHoldSize,
				HealthCondition,
				MedicareStatus,
				MedicareProducts,
				Type,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
