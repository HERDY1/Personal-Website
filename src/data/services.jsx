import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaGithub, FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Github',
		icon: <FaGithub className="w-full h-full" />,
		description:
			'GitHub adalah layanan hos web bersama untuk proyek pengembangan perangkat lunak yang menggunakan sistem kendali versi Git dan layanan hosting internet.',
	},
	{
		title: 'Ui/Ux',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Desain Antarmuka Pengguna atau rekayasa antarmuka pengguna adalah desain untuk komputer, peralatan, mesin, perangkat komunikasi mobile, aplikasi perangkat lunak, dan situs web yang berfokus pada pengalaman pengguna dan interaksi.',
	},
	{
		title: 'Front-end Devloper',
		icon: <VscCode className="w-full h-full" />,
		description:
			'web front-end adalah pengembangan antarmuka pengguna grafis dari sebuah situs web, melalui penggunaan HTML, CSS, dan JavaScript, sehingga pengguna dapat melihat dan berinteraksi dengan situs web tersebut.',
	},
];
