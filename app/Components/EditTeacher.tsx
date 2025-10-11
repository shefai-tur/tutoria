'use client';
import { formSchema } from "../../formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  {useSession} from 'next-auth/react';

import { z } from "zod";
import { useEffect, useState } from "react";
import { useGradesByMedium,useMedium, useSubjects } from "@/utils/Hooks/FormDataHook";
import Loading from "./Loading";
import { updateTeacher, updateAvailability } from "@/utils/formSubmission";
import TagForm from "./TagForm";
import MultiSelect from "./MultiSelect";
import Availability, { Slot } from "./Availability";

type FormType = z.infer<typeof formSchema>;

type EditTeacherProps = {
	initialData?: Partial<FormType>;
	initialSlots?: Slot[];
	teacherId?: string;
};

const EditTeacher = ({ initialData, initialSlots, teacherId }: EditTeacherProps) => {
	const defaultValues: FormType = {
		bio: initialData?.bio || "",
		min_salary: initialData?.min_salary || 500,
		experience_years: initialData?.experience_years || 0,
		gender: initialData?.gender || "male",
		teaching_mode: initialData?.teaching_mode || "online",
		subject_list: initialData?.subject_list || [],
		medium_list: initialData?.medium_list || [],
		grade_list: initialData?.grade_list || [],
		preferred_distance: initialData?.preferred_distance || 5,
	};

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FormType>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	// Watch arrays for reactive checkbox UI
	const watchedSubjects = watch("subject_list");
	const watchedMediums = watch("medium_list");
	const watchedGrades = watch("grade_list");

	const [slots, setSlots] = useState<Slot[]>(
		initialSlots || [{ start: "16:00", end: "21:00", days: ["MO", "WE", "TU", "TH", "SA", "SU"] }]
	);

	const hasNoValidSlots = () => {
		if (!slots || slots.length === 0) return true;
		return slots.some(slot => !slot.days || slot.days.length === 0);
	};

	useEffect(() => {
		console.log(hasNoValidSlots() ? "No valid availability slots" : "Valid availability slots");
		console.log("Availability slots updated:", slots);
	}, [slots]);

	// Reset form when initialData changes
	useEffect(() => {
		if (initialData) {
			reset(defaultValues);
		}
	}, [initialData, reset]);

	// Update slots when initialSlots changes
	useEffect(() => {
		if (initialSlots) {
			setSlots(initialSlots);
		}
	}, [initialSlots]);
	
	const {data: session} = useSession();
	const {mediums, loading: mediumsLoading, error: mediumsError} = useMedium();
	const  {grades, loading: gradesLoading, error: gradesError} = useGradesByMedium({medium_id: watchedMediums}); 
	const {subjects, loading: subjectsLoading, error: subjectsError} = useSubjects({grade_id: watchedGrades});
	
	const handleArrayChange = (name: keyof FormType, value: string) => {
		const arr = watch(name) as string[];
		if (arr.includes(value)) {
			setValue(name, arr.filter((v) => v !== value));
		} else {
			setValue(name, [...arr, value]);
		}
	};

	const onSubmit = async (data: FormType) => {
		console.log("Edit Form Data:", data);
		const idToken = (session as any)?.id_token;
		if (!idToken) {
			alert("You must be logged in to update the profile.");
			return;
		}
		if (!teacherId) {
			alert("Teacher ID is required for updating.");
			return;
		}
		if (hasNoValidSlots()) {
			alert("Please add at least one availability slot with selected days or remove the empty slots.");
			return;
		}
		try {
			const response = await updateTeacher(idToken, teacherId, data);
			if (response) {
				alert("Profile updated successfully!");
				const slotResponse = await updateAvailability(idToken, teacherId, slots);
				if (slotResponse) {
					alert("Availability slots updated successfully!");
				} else {
					alert("Failed to update availability slots.");
				}
			}
		} catch (error: any) {
			alert(error.message || "Error updating profile");
		}
	};

	return (
		<form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full mb-8">
				<h1 className="font-DMSans font-semibold text-2xl border-b-2 border-quaternary4">
					Edit Teacher Profile
				</h1>
				<h2 className="font-DMSans font-normal text-lg mt-2">Update your details</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Column */}
				<div className="flex flex-col gap-6">
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Bio</label>
						<textarea
							{...register("bio")}
							placeholder="Write about yourself"
							className="border border-quaternary4 rounded-sm outline-0 w-full p-2 text-sm"
							minLength={10}
							maxLength={500}
						/>
						{errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>}
					</div>
					<div className="relative mb-2">
						<label className="font-DMSans font-medium text-base mb-1 block">Minimum Salary: 
							<span className="font-bold italic">  {watch("min_salary")} Tk</span>
						</label>
						<input
							type="range"
							{...register("min_salary", { valueAsNumber: true })}
							min={500}
							max={25000}
							step={100}
							className="range range-neutral border border-quaternary4 rounded-sm outline-0 w-full p-2 text-sm"
						/>
						<div className="mt-2 text-md font-bold text-gray-700">
							
						</div>
						{errors.min_salary && <p className="text-red-500 text-xs mt-1">{errors.min_salary.message}</p>}
					</div>
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Experience (years)</label>
						<input
							type="number"
							{...register("experience_years", { valueAsNumber: true })}
							min={0}
							className="border border-quaternary4 rounded-sm outline-0 w-full p-2 text-sm"
						/>
						{errors.experience_years && <p className="text-red-500 text-xs mt-1">{errors.experience_years.message}</p>}
					</div>
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Gender</label>
						<select
							{...register("gender")}
							className="select w-full outline-0 p-2 text-sm"
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Teaching Mode</label>
						<select
							{...register("teaching_mode")}
							className="select w-full outline-0 p-2 text-sm"
						>
							<option value="online">Online</option>
							<option value="offline">Offline</option>
							<option value="both">Both</option>
						</select>
					</div>
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Preferred Distance 	: 
							<span className="font-bold italic">  {watch("preferred_distance")} Km</span>
						</label>
						<input
							type="range"
							{...register("preferred_distance", { valueAsNumber: true })}
							min={0.5}
							max={15}
							step={0.5}
							className="range range-neutral border border-quaternary4 rounded-sm outline-0 w-full p-2 text-sm"
						/>
						{errors.preferred_distance && <p className="text-red-500 text-xs mt-1">{errors.preferred_distance.message}</p>}
					</div>
				</div>
				{/* Right Column */}
				<div className="flex flex-col gap-6">
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Medium</label>
						{mediumsLoading ? (
							<Loading />
						) : mediumsError ? (
							<p className="text-red-500 text-xs">Error loading mediums</p>
						) : mediums && mediums.length > 0 && (
							<div className="flex flex-wrap gap-2">
								<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
								{mediums.map((medium) => (
									<TagForm
									style="special"
										key={medium.id}
										name={medium.name}
										value={watchedMediums.includes(medium.id.toString())}
										handleChange={() => handleArrayChange("medium_list", medium.id.toString())}
									/>
								))}
								</ ul>
							</div>
						)}
						{errors.medium_list && <p className="text-red-500 text-xs mt-1">{errors.medium_list.message}</p>}
					</div>
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Grades</label>
						{gradesLoading ? (
							<Loading />
						) : grades && grades.length > 0 && (
							<div className="flex flex-wrap gap-2">
								<MultiSelect
									options={grades.map((grade) => ({
										value: grade.id.toString(),
										label: grade.name,
									}))}
									values={grades
										.filter((grade) => watchedGrades.includes(grade.id.toString()))
										.map((grade) => ({
											value: grade.id.toString(),
											label: grade.name,
										}))}
									handleChange={(selectedOptions) => {
										const values = selectedOptions
											? selectedOptions.map((opt: any) => opt.value)
											: [];
										setValue("grade_list", values);
									}}
								/>
							</div>
						)}
						{errors.grade_list && <p className="text-red-500 text-xs mt-1">{errors.grade_list.message}</p>}
					</div>
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Subjects</label>
						{subjectsLoading ? (
							<Loading />
						) : subjectsError ? (
							<p className="text-red-500 text-xs">{subjectsError}</p>
						) : subjects && subjects.length > 0 && (
							<div>
								{/* @ts-ignore */}
								<MultiSelect
									options={subjects.map((subject) => ({
										value: subject.id.toString(),
										label: subject.name,
									}))}
									values={subjects
										.filter((subject) => watchedSubjects.includes(subject.id.toString()))
										.map((subject) => ({
											value: subject.id.toString(),
											label: subject.name,
										}))}
									handleChange={(selectedOptions) => {
										const values = selectedOptions
											? selectedOptions.map((opt: any) => opt.value)
											: [];
										setValue("subject_list", values);
									}}
								/>
							</div>
						)}
						{errors.subject_list && <p className="text-red-500 text-xs mt-1">{errors.subject_list.message}</p>}
					</div>
					<div>
						<label className="font-DMSans font-medium text-base mb-1 block">Availability</label>
						<Availability slots={slots} setSlots={setSlots} />
						{hasNoValidSlots() && <p className="text-red-500 text-xs mt-1">Please add at least one availability slot with selected days or remove the empty slots.</p>}
					</div>
				</div>
			</div>
			<div className="mt-10 text-center">
				<button
					type="submit"
					className="bg-tertiary3 text-white font-DMSans font-semibold text-base px-8 py-2 rounded-md hover:bg-primary1 transition"
				>
					Update Profile
				</button>
			</div>
		</form>
	);
};

export default EditTeacher;
