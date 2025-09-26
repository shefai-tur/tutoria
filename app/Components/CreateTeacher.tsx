'use client';
import { formSchema } from "../../formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  {useSession} from 'next-auth/react';

import { z } from "zod";
import { useEffect, useState } from "react";
import { useGradesByMedium,useMedium } from "@/utils/Hooks/MediumHook";
type FormType = z.infer<typeof formSchema>;

const subjects = ["Math", "Physics", "Chemistry", "Biology", "English"];

const defaultValues: FormType = {
	bio: "",
	min_salary: 500,
	experience_years: 0,
	gender: "male",
	teaching_mode: "online",
	subject_list: [],
	medium_list: [],
	grade_list: [],
};

const CreateTeacher = () => {
	const {

			register,
			handleSubmit,
			setValue,
			watch,
			formState: { errors },
	} = useForm<FormType>({
			resolver: zodResolver(formSchema),
			defaultValues,
	});

	const {mediums, loading, error} = useMedium();
	const  {grades} = useGradesByMedium('1'); 

		// Watch arrays for reactive checkbox UI
		const watchedSubjects = watch("subject_list");
		const watchedMediums = watch("medium_list");
		const watchedGrades = watch("grade_list");

		const handleArrayChange = (name: keyof FormType, value: string) => {
			const arr = watch(name) as string[];
			if (arr.includes(value)) {
				setValue(name, arr.filter((v) => v !== value));
			} else {
				setValue(name, [...arr, value]);
			}
		};

	const onSubmit = (data: FormType) => {
		// Submit logic here
        console.log(data);
		alert("Form submitted successfully!");
	};

   

	return (
		<form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
			<div className="w-48">
				<h1 className="font-DMSans font-semibold text-2xl border-b-2 border-quaternary4">
					Teacher Profile
				</h1>
				<h2 className="font-DMSans font-normal text-xl mt-1.5">Fill your details</h2>
			</div>
			<div className="mt-5">
				<div className="border border-quaternary4 p-12">
					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Bio</p>
						<textarea
							{...register("bio")}
							placeholder="Write about yourself"
							className="border border-quaternary4 rounded-sm outline-0 w-full p-1.5"
							minLength={10}
							maxLength={500}
						/>
					</div>
					{errors.bio && <p className="text-red-500 text-sm mb-2">{errors.bio.message}</p>}

					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Minimum Salary</p>
						<input
							type="number"
							{...register("min_salary", { valueAsNumber: true })}
							min={500}
							className="border border-quaternary4 rounded-sm outline-0 w-full p-1.5"
						/>
					</div>
					{errors.min_salary && <p className="text-red-500 text-sm mb-2">{errors.min_salary.message}</p>}

					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Experience (years)</p>
						<input
							type="number"
							{...register("experience_years", { valueAsNumber: true })}
							min={0}
							className="border border-quaternary4 rounded-sm outline-0 w-full p-1.5"
						/>
					</div>

					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Gender</p>
						<select
							{...register("gender")}
							className="select w-full outline-0"
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Teaching Mode</p>
						<select
							{...register("teaching_mode")}
							className="select w-full outline-0"
						>
							<option value="online">Online</option>
							<option value="offline">Offline</option>
							<option value="both">Both</option>
						</select>
					</div>

					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Subjects</p>
						<div className="w-full flex flex-wrap gap-2">
							{subjects.map((subject) => (
								<label key={subject} className="inline-flex items-center">
									<input
										type="checkbox"
										checked={watchedSubjects.includes(subject)}
										onChange={() => handleArrayChange("subject_list", subject)}
									/>
									<span className="ml-2">{subject}</span>
								</label>
							))}
						</div>
					</div>
					{errors.subject_list && <p className="text-red-500 text-sm mb-2">{errors.subject_list.message}</p>}

					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Medium</p>
						<div className="w-full flex gap-2">
							{mediums.map((medium) => (
								<label key={medium.id} className="inline-flex items-center">
									<input
										type="checkbox"
										checked={watchedMediums.includes(medium.id.toString())}
										onChange={() => handleArrayChange("medium_list", medium.id.toString())}
									/>
									<span className="ml-2">{medium.name}</span>
								</label>
							))}
						</div>
					</div>
					{errors.medium_list && <p className="text-red-500 text-sm mb-2">{errors.medium_list.message}</p>}

					<div className="flex items-center mb-4">
						<p className="font-DMSans font-normal text-xl w-52">Grades</p>
						<div className="w-full flex flex-wrap gap-2">
							{grades.map((grade) => (
								<label key={grade.id} className="inline-flex items-center">
									<input
										type="checkbox"
										checked={watchedGrades.includes(grade.id.toString())}
										onChange={() => handleArrayChange("grade_list", grade.id.toString())}
									/>
									<span className="ml-2">{grade.name}</span>
								</label>
							))}
						</div>
					</div>
					{errors.grade_list && <p className="text-red-500 text-sm mb-2">{errors.grade_list.message}</p>}

					<div className="mt-10 text-center">
						<button
							type="submit"
							className="bg-tertiary3 text-white font-DMSans font-semibold text-lg px-10 py-2 rounded-md hover:bg-primary1"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CreateTeacher;
