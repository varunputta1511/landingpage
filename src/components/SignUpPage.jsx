import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../constraints/Input";
import { Loader, Lock, Mail, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../constraints/PasswordStrengthMeter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [institute, setInstitute] = useState("");
	const [dob, setDob] = useState(null); // Date of Birth state
	const [gender, setGender] = useState(""); // Gender state
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSignUp = async (e) => {
		e.preventDefault();

		setIsLoading(true);
		setError(""); // Clear previous errors

		// Simulate a sign-up process
		setTimeout(() => {
			// Replace with actual sign-up logic
			console.log("Full Name:", name);
			console.log("Email:", email);
			console.log("Password:", password);
			console.log("Institute Name:", institute);
			console.log("Date of Birth:", dob);
			console.log("Gender:", gender);
			setIsLoading(false);
			// Navigate to a different page if needed
			// navigate("/verify-email");
		}, 1000);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
			>
				<div className="p-8">
					<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
						Create Account
					</h2>

					<form onSubmit={handleSignUp}>
						<Input
							icon={User}
							type="text"
							placeholder="Full Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							icon={Mail}
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							icon={Lock}
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							icon={User}
							type="text"
							placeholder="Institute Name"
							value={institute}
							onChange={(e) => setInstitute(e.target.value)}
						/>
						<div className="relative">
							<DatePicker
								selected={dob}
								onChange={(date) => setDob(date)}
								dateFormat="MMMM d, yyyy"
								className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
								placeholderText="Select Date of Birth"
								showYearDropdown
								scrollableYearDropdown
								yearDropdownItemNumber={50} // Show 50 years in dropdown
							/>
							<Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
						</div>

						<div className="flex flex-col gap-2 mt-4">
							<label className="flex items-center">
								<input
									type="radio"
									name="gender"
									value="male"
									checked={gender === 'male'}
									onChange={(e) => setGender(e.target.value)}
									className="mr-2"
								/>
								Male
							</label>
							<label className="flex items-center">
								<input
									type="radio"
									name="gender"
									value="female"
									checked={gender === 'female'}
									onChange={(e) => setGender(e.target.value)}
									className="mr-2"
								/>
								Female
							</label>
							<label className="flex items-center">
								<input
									type="radio"
									name="gender"
									value="other"
									checked={gender === 'other'}
									onChange={(e) => setGender(e.target.value)}
									className="mr-2"
								/>
								Other
							</label>
						</div>

						{error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
						<PasswordStrengthMeter password={password} />

						<motion.button
							className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-900 text-white font-bold rounded-lg shadow-lg hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Sign Up"}
						</motion.button>
					</form>
				</div>
				<div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
					<p className="text-sm text-gray-400">
						Already have an account?{" "}
						<Link to="/login" className="text-orange-400 hover:underline">
							Login
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default SignUpPage;
