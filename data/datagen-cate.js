const rawRankingString =
    "A	TOCS	ACM Transactions on Computer Systems	ACM Trans. Comput. Syst.	Architecture\n" +
    "A	TOS	ACM Transactions on Storage	TOS	Architecture\n" +
    "A	TCAD	IEEE Transactions On Computer-Aided Design Of Integrated Circuits And System	IEEE Trans. on CAD of Integrated Circuits and Systems	Architecture\n" +
    "A	TC	IEEE Transactions on Computers	IEEE Trans. Computers	Architecture\n" +
    "A	TPDS	IEEE Transactions on Parallel and Distributed Systems	IEEE Trans. Parallel Distrib. Syst.	Architecture\n" +
    "B	TACO	ACM Transactions on Architecture and Code Optimization	TACO	Architecture\n" +
    "B	TAAS	ACM Transactions on Autonomous and Adaptive Systems	TAAS	Architecture\n" +
    "B	TODAES	ACM Transactions on Design Automation of Electronic Systems	ACM Trans. Design Autom. Electr. Syst.	Architecture\n" +
    "B	TECS	ACM Transactions on Embedded Computing Systems	ACM Trans. Embedded Comput. Syst.	Architecture\n" +
    "B	TRETS	ACM Transactions on Reconfigurable Technology and Systems	TRETS	Architecture\n" +
    "B	TVLSI	IEEE Transactions on Very Large Scale Integration (VLSI) Systems	IEEE Trans. VLSI Syst.	Architecture\n" +
    "B	JPDC	Journal of Parallel and Distributed Computing	J. Parallel Distrib. Comput.	Architecture\n" +
    "B	JSA	Journal of Systems Architecture: Embedded Software Design	Journal of Systems Architecture - Embedded Systems Design	Architecture\n" +
    "B	PARCO	Parallel Computing	Parallel Computing	Architecture\n" +
    "B		Performance Evaluation: An International Journal	Perform. Eval.	Architecture\n" +
    "C	JETC	ACM Journal on Emerging Technologies in Computing Systems	JETC	Architecture\n" +
    "C		Concurrency and Computation: Practice and Experience	Concurrency and Computation: Practice and Experience	Architecture\n" +
    "C	DC	Distributed Computing	Distributed Computing	Architecture\n" +
    "C	FGCS	Future Generation Computer Systems	Future Generation Comp. Syst.	Architecture\n" +
    "C	TCC	IEEE Transactions on Cloud Computing	IEEE Trans. Cloud Computing	Architecture\n" +
    "C	Integration	Integration, the VLSI Journal	Integration	Architecture\n" +
    "C	JETTA	Journal of Electronic Testing-Theory and Applications	J. Electronic Testing	Architecture\n" +
    "C	JGC	The Journal of Grid computing	J. Grid Comput.	Architecture\n" +
    "C	MICPRO	Microprocessors and Microsystems: Embedded Hardware Design	Microprocessors and Microsystems - Embedded Hardware Design	Architecture\n" +
    "C	RTS	Real-Time Systems	Real-Time Systems	Architecture\n" +
    "C	TJSC	The Journal of Supercomputing	The Journal of Supercomputing	Architecture\n" +
    "A	PPoPP	ACM SIGPLAN Symposium on Principles & Practice of Parallel Programming	PPoPP	Architecture\n" +
    "A	FAST	Conference on File and Storage Technologies	FAST	Architecture\n" +
    "A	DAC	Design Automation Conference	DAC	Architecture\n" +
    "A	HPCA	High-Performance Computer Architecture	HPCA	Architecture\n" +
    "A	MICRO	IEEE/ACM International Symposium on Microarchitecture	MICRO	Architecture\n" +
    "A	SC	International Conference for High Performance Computing, Networking, Storage, and Analysis	SC	Architecture\n" +
    "A	ASPLOS	International Conference on Architectural Support for Programming Languages and Operating Systems	ASPLOS	Architecture\n" +
    "A	ISCA	International Symposium on Computer Architecture	ISCA	Architecture\n" +
    "A	USENIX ATC	USENIX Annul Technical Conference	USENIX Annual Technical Conference	Architecture\n" +
    "B	SOCC	ACM Symposium on Cloud Computing	SoCC	Architecture\n" +
    "B	SPAA	ACM Symposium on Parallelism in Algorithms and Architectures	SPAA	Architecture\n" +
    "B	PODC	ACM Symposium on Principles of Distributed Computing	PODC	Architecture\n" +
    "B	FPGA	ACM/SIGDA International Symposium on Field-Programmable Gate Arrays	FPGA	Architecture\n" +
    "B	CGO	Code Generation and Optimization	CGO	Architecture\n" +
    "B	DATE	Design, Automation & Test in Europe	DATE	Architecture\n" +
    "B	EuroSys	European Conference on Computer Systems	EuroSys	Architecture\n" +
    "B	HOT CHIPS	ACM Symposium on High Performance Chips	Hot Chips Symposium	Architecture\n" +
    "B	CLUSTER	IEEE International Conference on Cluster Computing	CLUSTER	Architecture\n" +
    "B	ICCD	International Conference on Computer Design	ICCD	Architecture\n" +
    "B	ICCAD	International Conference on Computer-Aided Design	ICCAD	Architecture\n" +
    "B	ICDCS	International Conference on Distributed Computing Systems	ICDCS	Architecture\n" +
    "B	CODES+ISSS	International Conference on Hardware/Software Co-design and System Synthesis	CODES+ISSS	Architecture\n" +
    "B	HiPEAC	International Conference on High Performance and Embedded Architectures and Compilers	HiPEAC	Architecture\n" +
    "B	SIGMETRICS	International Conference on Measurement and Modeling of Computer Systems	SIGMETRICS	Architecture\n" +
    "B	PACT	International Conference on Parallel Architectures and Compilation Techniques	PACT	Architecture\n" +
    "B	ICPP	International Conference on Parallel Processing	ICPP	Architecture\n" +
    "B	ICS	International Conference on Supercomputing	ICS	Architecture\n" +
    "B	VEE	International Conference on Virtual Execution Environments	VEE	Architecture\n" +
    "B	IPDPS	International Parallel & Distributed Processing Symposium	IPDPS	Architecture\n" +
    "B	Performance	International Symposium on Computer Performance, Modeling, Measurements and Evaluation	Performance	Architecture\n" +
    "B	HPDC	International Symposium on High Performance Distributed Computing	HPDC	Architecture\n" +
    "B	ITC	International Test Conference	ITC	Architecture\n" +
    "B	LISA	Large Installation system Administration Conference	LISA	Architecture\n" +
    "B	MSST	Mass Storage Systems and Technologies	MSST	Architecture\n" +
    "B	RTAS	Real-Time and Embedded Technology and Applications Symposium	RTAS	Architecture\n" +
    "C	CF	ACM International Conference on Computing Frontiers	CF	Architecture\n" +
    "C	SYSTOR	ACM International Systems and Storage Conference	SYSTOR	Architecture\n" +
    "C	NOCS	ACM/IEEE International Symposium on Networks-on-Chip	NOCS	Architecture\n" +
    "C	ASAP	Application-Specific Systems, Architectures, and Processors	ASAP	Architecture\n" +
    "C	ASP-DAC	Asia and South Pacific Design Automation Conference	ASP-DAC	Architecture\n" +
    "C	Euro-Par	European Conference on Parallel and Distributed Computing	Euro-Par	Architecture\n" +
    "C	ETS	European Test Symposium	ETS	Architecture\n" +
    "C	FPL	Field Programmable Logic and Applications	FPL	Architecture\n" +
    "C	FCCM	Field-Programmable Custom Computing Machines	FCCM	Architecture\n" +
    "C	GLSVLSI	Great Lakes Symposium on VLSI	ACM Great Lakes Symposium on VLSI	Architecture\n" +
    "C	ATS	IEEE Asian Test Symposium	ATS	Architecture\n" +
    "C	HPCC	IEEE International Conference on High Performance Computing and Communications	HPCC	Architecture\n" +
    "C	HiPC	IEEE International Conference on High Performance Computing, Data and Analytics	HiPC	Architecture\n" +
    "C	MASCOTS	IEEE International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems	MASCOTS	Architecture\n" +
    "C	ISPA	IEEE International Symposium on Parallel and Distributed Processing with Applications	ISPA	Architecture\n" +
    "C	CCGRID	IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing	CCGRID	Architecture\n" +
    "C	NPC	IFIP International Conference on Network and Parallel Computing	NPC	Architecture\n" +
    "C	ICA3PP	International Conference on Algorithms and Architectures for Parallel Processing	ICA3PP	Architecture\n" +
    "C	CASES	International Conference on Compilers, Architectures, and Synthesis for Embedded Systems	CASES	Architecture\n" +
    "C	FPT	International Conference on Field-Programmable Technology	FPT	Architecture\n" +
    "C	ICPADS	International Conference on Parallel and Distributed Systems	ICPADS	Architecture\n" +
    "C	ISCAS	International Symposium on Circuits and Systems	ISCAS	Architecture\n" +
    "C	ISLPED	International Symposium on Low Power Electronics and Design	ISLPED	Architecture\n" +
    "C	ISPD	International Symposium on Physical Design	ISPD	Architecture\n" +
    "C	HotI	Symposium on High-Performance Interconnects	Hot Interconnects	Architecture\n" +
    "C	VTS	VLSI Test Symposium	VTS	Architecture\n" +
    "A	JSAC	IEEE Journal of Selected Areas in Communications	IEEE Journal on Selected Areas in Communications	Networking\n" +
    "A	TMC	IEEE Transactions on Mobile Computing	IEEE Trans. Mob. Comput.	Networking\n" +
    "A	TON	IEEE/ACM Transactions on Networking	IEEE/ACM Trans. Netw.	Networking\n" +
    "B	TOIT	ACM Transactions on Internet Technology	ACM Trans. Internet Techn.	Networking\n" +
    "B	TOMCCAP	ACM Transactions on Multimedia Computing, Communications and Applications	TOMCCAP	Networking\n" +
    "B	TOSN	ACM Transactions on Sensor Networks	TOSN	Networking\n" +
    "B	CN	Computer Networks	Computer Networks	Networking\n" +
    "B	TCOM	IEEE Transactions on Communications	IEEE Trans. Communications	Networking\n" +
    "B	TWC	IEEE Transactions on Wireless Communications	IEEE Trans. Wireless Communications	Networking\n" +
    "C		Ad hoc Networks	Ad Hoc Networks	Networking\n" +
    "C	CC	Computer Communications	Computer Communications	Networking\n" +
    "C	TNSM	IEEE Transactions on Network and Service Management	IEEE Trans. Network and Service Management	Networking\n" +
    "C		IET Communications	IET Communications	Networking\n" +
    "C	JNCA	Journal of Network and Computer Applications	J. Network and Computer Applications	Networking\n" +
    "C	MONET	Mobile Networks & Applications	MONET	Networking\n" +
    "C		Networks	Networks	Networking\n" +
    "C	PPNA	Peer-to-Peer Networking and Applications	Peer-to-Peer Networking and Applications	Networking\n" +
    "C	WCMC	Wireless Communications & Mobile Computing	Wireless Communications and Mobile Computing	Networking\n" +
    "C		Wireless Networks	Wireless Networks	Networking\n" +
    "A	SIGCOMM	ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication	SIGCOMM	Networking\n" +
    "A	MobiCom	ACM International Conference on Mobile Computing and Networking	MobiCom	Networking\n" +
    "A	INFOCOM	IEEE International Conference on Computer Communications	INFOCOM	Networking\n" +
    "A	NSDI	Symposium on Network System Design and Implementation	NSDI	Networking\n" +
    "B	SenSys	ACM Conference on Embedded Networked Sensor Systems	SenSys	Networking\n" +
    "B	CoNEXT	ACM International Conference on emerging Networking EXperiments and Technologies	CoNEXT	Networking\n" +
    "B	SECON	IEEE Communications Society Conference on Sensor and Ad Hoc Communications and Networks	SECON	Networking\n" +
    "B	IPSN	International Conference on Information Processing in Sensor Networks	IPSN	Networking\n" +
    "B	MobiSys	International Conference on Mobile Systems, Applications, and Services	MobiSys	Networking\n" +
    "B	ICNP	International Conference on Network Protocols	ICNP	Networking\n" +
    "B	MobiHoc	International Symposium on Mobile Ad Hoc Networking and Computing	MobiHoc	Networking\n" +
    "B	NOSSDAV	International Workshop on Network and Operating System Support for Digital Audio and Video	NOSSDAV	Networking\n" +
    "B	IWQoS	International Workshop on Quality of Service	IWQoS	Networking\n" +
    "B	IMC	Internet Measurement Conference	IMC	Networking\n" +
    "C	ANCS	Architectures for Networking and Communications Systems	ANCS	Networking\n" +
    "C	APNOMS	Asia-Pacific Network Operations and Management Symposium	APNOMS	Networking\n" +
    "C	FORTE	Formal Techniques for Networked and Distributed Systems	FORTE	Networking\n" +
    "C	LCN	IEEE Conference on Local Computer Networks	LCN	Networking\n" +
    "C	GLOBECOM	IEEE Global Communications Conference	GLOBECOM	Networking\n" +
    "C	ICC	IEEE International Conference on Communications	ICC	Networking\n" +
    "C	ICCCN	IEEE International Conference on Computer Communications and Networks	ICCCN	Networking\n" +
    "C	MASS	IEEE International Conference on Mobile Ad-hoc and Sensor Systems	MASS	Networking\n" +
    "C	P2P	IEEE International Conference on P2P Computing	P2P	Networking\n" +
    "C	IPCCC	IEEE International Performance Computing and Communications Conference	IPCCC	Networking\n" +
    "C	WoWMoM	IEEE International Symposium on a World of Wireless Mobile and Multimedia Networks	WOWMOM	Networking\n" +
    "C	ISCC	IEEE Symposium on Computers and Communications	ISCC	Networking\n" +
    "C	WCNC	IEEE Wireless Communications & Networking Conference	WCNC	Networking\n" +
    "C	Networking	IFIP International Conferences on Networking	Networking	Networking\n" +
    "C	IM	IFIP/IEEE International Symposium on Integrated Network Management	IM	Networking\n" +
    "C	MSN	International Conference on Mobile Ad-hoc and Sensor Networks	MSN	Networking\n" +
    "C	MSWiM	International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems	MSWiM	Networking\n" +
    "C	WASA	International Conference on Wireless Algorithms, Systems, and Applications	WASA	Networking\n" +
    "C	HotNets	The Workshop on Hot Topics in Networks	HotNets	Networking\n" +
    "A	TDSC	IEEE Transactions on Dependable and Secure Computing	IEEE Trans. Dependable Sec. Comput.	Security\n" +
    "A	TIFS	IEEE Transactions on Information Forensics and Security	IEEE Trans. Information Forensics and Security	Security\n" +
    "A		Journal of Cryptology	J. Cryptology	Security\n" +
    "B	TOPS	ACM Transactions on Privacy and Security	ACM Trans. Priv. Secur.	Security\n" +
    "B		Computers & Security	Computers & Security	Security\n" +
    "B		Designs, Codes and Cryptography	Des. Codes Cryptogr.	Security\n" +
    "B	JCS	Journal of Computer Security	Journal of Computer Security	Security\n" +
    "C	CLSR	Computer Law and Security Review		Security\n" +
    "C		EURASIP Journal on Information Security	EURASIP J. Information Security	Security\n" +
    "C		IET Information Security	IET Information Security	Security\n" +
    "C	IMCS	Information Management & Computer Security	Inf. & Comput. Security	Security\n" +
    "C	IJICS	International Journal of Information and Computer Security	IJICS	Security\n" +
    "C	IJISP	International Journal of Information Security and Privacy	IJISP	Security\n" +
    "C	JISA	Journal of Information Security and Application	J. Inf. Sec. Appl.	Security\n" +
    "C	SCN	Security and Communication Networks	Security and Communication Networks	Security\n" +
    "A	CCS	ACM Conference on Computer and Communications Security	ACM Conference on Computer and Communications Security	Security\n" +
    "A	EUROCRYPT	European Cryptology Conference	EUROCRYPT	Security\n" +
    "A	S&P	IEEE Symposium on Security and Privacy	IEEE Symposium on Security and Privacy	Security\n" +
    "A	CRYPTO	International Cryptology Conference	CRYPTO	Security\n" +
    "A	USENIX Security	Usenix Security Symposium	USENIX Security Symposium	Security\n" +
    "B	ACSAC	Annual Computer Security Applications Conference	ACSAC	Security\n" +
    "B	ASIACRYPT	Annual International Conference on the Theory and Application of Cryptology and Information Security	ASIACRYPT	Security\n" +
    "B	ESORICS	European Symposium on Research in Computer Security	ESORICS	Security\n" +
    "B	FSE	Fast Software Encryption	FSE	Security\n" +
    "B	CSFW	IEEE Computer Security Foundations Workshop	CSF	Security\n" +
    "B	SRDS	IEEE International Symposium on Reliable Distributed Systems	SRDS	Security\n" +
    "B	CHES	International Conference on Cryptographic Hardware and Embedded Systems	CHES	Security\n" +
    "B	DSN	International Conference on Dependable Systems and Networks	DSN	Security\n" +
    "B	RAID	International Symposium on Recent Advances in Intrusion Detection	RAID	Security\n" +
    "B	PKC	International Workshop on Practice and Theory in Public Key Cryptography	Public Key Cryptography	Security\n" +
    "B	NDSS	ISOC Network and Distributed System Security Symposium	NDSS	Security\n" +
    "B	TCC	Theory of Cryptography Conference	TCC	Security\n" +
    "C	WiSec	ACM Conference on Security and Privacy in Wireless and Mobile Networks	WiSec	Security\n" +
    "C	SACMAT	ACM Symposium on Access Control Models and Technologies	SACMAT	Security\n" +
    "C	DRM	ACM Workshop on Digital Rights Management	Digital Rights Management Workshop	Security\n" +
    "C	IH&MMSec	ACM Workshop on Information Hiding and Multimedia Security	IH&MMSec	Security\n" +
    "C	ACNS	Applied Cryptography and Network Security	ACNS	Security\n" +
    "C	AsiaCCS	Asia Conference on Computer and Communications Security	AsiaCCS	Security\n" +
    "C	ACISP	AustralasiaConferenceonInformation SecurityandPrivacy	ACISP	Security\n" +
    "C	CT-RSA	RSA Conference, Cryptographers' Track	CT-RSA	Security\n" +
    "C	DIMVA	Detection of Intrusions and Malware &Vulnerability Assessment	DIMVA	Security\n" +
    "C	DFRWS	Digital Forensic Research Workshop	DFRWS	Security\n" +
    "C	FC	Financial Cryptography and Data Security	Financial Cryptography Workshops	Security\n" +
    "C	TrustCom	IEEE International Conference on Trust,Security and Privacy in Computing and Communications	TrustCom	Security\n" +
    "C	SEC	IFIP International Information Security Conference	SEC	Security\n" +
    "C	IFIP WG 11.9	IFIP WG 11.9 International Conference on Digital Forensics	IFIP Int. Conf. Digital Forensics	Security\n" +
    "C	ISC	Information Security Conference	ISC	Security\n" +
    "C	ICDF2C	International Conference on Digital Forensics & Cyber Crime	ICDF2C	Security\n" +
    "C	ICICS	International Conference on Information and Communications Security	ICICS	Security\n" +
    "C	SecureComm	International Conference on Security and Privacy in Communication Networks	SecureComm	Security\n" +
    "C	NSPW	New Security Paradigms Workshop	NSPW	Security\n" +
    "C	PAM	Passive and Active Measurement Conference	PAM	Security\n" +
    "C	PETS	Privacy Enhancing Technologies Symposium	Privacy Enhancing Technologies	Security\n" +
    "C	SAC	Selected Areas in Cryptography	SAC	Security\n" +
    "C	SOUPS	Symposium On Usable Privacy and Security	SOUPS	Security\n" +
    "C	HotSec	USENIX Workshop on Hot Topics in Security	HotSec	Security\n" +
    "A	TOPLAS	ACM Transactions on Programming Languages & Systems	ACM Trans. Program. Lang. Syst.	Software Eng.&Program lang.\n" +
    "A	TOSEM	ACM Transactions on Software Engineering and Methodology	ACM Trans. Softw. Eng. Methodol.	Software Eng.&Program lang.\n" +
    "A	TSE	IEEE Transactions on Software Engineering	IEEE Trans. Software Eng.	Software Eng.&Program lang.\n" +
    "B	ASE	Automated Software Engineering	Autom. Softw. Eng.	Software Eng.&Program lang.\n" +
    "B	ESE	Empirical Software Engineering	Empirical Software Engineering	Software Eng.&Program lang.\n" +
    "B	TSC	IEEE Transactions on Service Computing	IEEE Trans. Services Computing	Software Eng.&Program lang.\n" +
    "B	IETS	IET Software	IET Software	Software Eng.&Program lang.\n" +
    "B	IST	Information and Software Technology	Information & Software Technology	Software Eng.&Program lang.\n" +
    "B	JFP	Journal of Functional Programming	J. Funct. Program.	Software Eng.&Program lang.\n" +
    "B		Journal of Software: Evolution and Process	Journal of Software: Evolution and Process	Software Eng.&Program lang.\n" +
    "B	JSS	Journal of Systems and Software	Journal of Systems and Softwar	Software Eng.&Program lang.\n" +
    "B	RE	Requirements Engineering	Requir. Eng.	Software Eng.&Program lang.\n" +
    "B	SCP	Science of Computer Programming	Sci. Comput. Program.	Software Eng.&Program lang.\n" +
    "B	SoSyM	Software and System Modeling	Software and Systems Modeling	Software Eng.&Program lang.\n" +
    "B	STVR	Software Testing, Verification and Reliability	Softw. Test., Verif. Reliab.	Software Eng.&Program lang.\n" +
    "B	SPE	Software: Practice and Experience	Softw., Pract. Exper.	Software Eng.&Program lang.\n" +
    "C	CL	Computer Languages, Systems and Structures	Computer Languages, Systems & Structures	Software Eng.&Program lang.\n" +
    "C	IJSEKE	International Journal on Software Engineering and Knowledge Engineering	International Journal of Software Engineering and Knowledge Engineering	Software Eng.&Program lang.\n" +
    "C	STTT	International Journal on Software Tools for Technology Transfer	STTT	Software Eng.&Program lang.\n" +
    "C	JLAP	Journal of Logic and Algebraic Programming	J. Log. Algebr. Meth. Program.	Software Eng.&Program lang.\n" +
    "C	JWE	Journal of Web Engineering	J. Web Eng.	Software Eng.&Program lang.\n" +
    "C	SOCA	Service Oriented Computing and Applications	Service Oriented Computing and Applications	Software Eng.&Program lang.\n" +
    "C	SQJ	Software Quality Journal	Software Quality Journal	Software Eng.&Program lang.\n" +
    "C	TPLP	Theory and Practice of Logic Programming	TPLP	Software Eng.&Program lang.\n" +
    "A	PLDI	ACM SIGPLAN Symposium on Programming Language Design & Implementation	PLDI	Software Eng.&Program lang.\n" +
    "A	POPL	ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages	POPL	Software Eng.&Program lang.\n" +
    "A	FSE/ESEC	ACM SIGSOFT Symposium on the Foundation of Software Engineering/ European Software Engineering Conference	SIGSOFT FSE/ESEC	Software Eng.&Program lang.\n" +
    "A	SOSP	ACM Symposium on Operating Systems Principles	SOSP	Software Eng.&Program lang.\n" +
    "A	OOPSLA	Conference on Object-Oriented Programming Systems, Languages,and Applications	OOPSLA	Software Eng.&Program lang.\n" +
    "A	ASE	International Conference on Automated Software Engineering	ASE	Software Eng.&Program lang.\n" +
    "A	ICSE	International Conference on Software Engineering	ICSE	Software Eng.&Program lang.\n" +
    "A	ISSTA	International Symposium on Software Testing and Analysis	ISSTA	Software Eng.&Program lang.\n" +
    "A	OSDI	USENIX Symposium on Operating Systems Design and Implementations	OSDI	Software Eng.&Program lang.\n" +
    "B	ECOOP	European Conference on Object-Oriented Programming	ECOOP	Software Eng.&Program lang.\n" +
    "B	ETAPS	European Joint Conferences on Theory and Practice of Software	ETAPS	Software Eng.&Program lang.\n" +
    "B	ICPC	IEEE International Conference on Program Comprehension	ICPC	Software Eng.&Program lang.\n" +
    "B	RE	IEEE International Requirement Engineering Conference	RE	Software Eng.&Program lang.\n" +
    "B	CAiSE	International Conference on Advanced Information Systems Engineering	CAiSE	Software Eng.&Program lang.\n" +
    "B	ICFP	International Conference on Function Programming	ICFP	Software Eng.&Program lang.\n" +
    "B	LCTES	International Conference on Languages,Compilers, Tools and Theory for Embedded Systems	LCTES	Software Eng.&Program lang.\n" +
    "B	MoDELS	International Conference on Model Driven Engineering Languages and Systems	MoDELS	Software Eng.&Program lang.\n" +
    "B	CP	International Conference on Principles and Practice of Constraint Programming	CP	Software Eng.&Program lang.\n" +
    "B	ICSOC	International Conference on Service Oriented Computing	ICSOC	Software Eng.&Program lang.\n" +
    "B	SANER	International Conference on Software Analysis, Evolution, and Reengineering	SANER	Software Eng.&Program lang.\n" +
    "B	ICSME	International Conference on Software Maintenance and Evolution	ICSME	Software Eng.&Program lang.\n" +
    "B	VMCAI	International Conference on Verification,Model Checking, and Abstract Interpretation	VMCAI	Software Eng.&Program lang.\n" +
    "B	ICWS	International Conference on Web Services(Research Track)	ICWS	Software Eng.&Program lang.\n" +
    "B	Middleware	International Middleware Conference	Middleware	Software Eng.&Program lang.\n" +
    "B	SAS	International Static Analysis Symposium	SAS	Software Eng.&Program lang.\n" +
    "B	ESEM	International Symposium on Empirical Software Engineering and Measurement	ESEM	Software Eng.&Program lang.\n" +
    "B	FM	International Symposium on Formal Methods	FM	Software Eng.&Program lang.\n" +
    "B	ISSRE	International Symposium on Software Reliability Engineering	ISSRE	Software Eng.&Program lang.\n" +
    "B	HotOS	USENIX Workshop on Hot Topics in Operating Systems	HotOS	Software Eng.&Program lang.\n" +
    "C	PEPM	ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation	PEPM	Software Eng.&Program lang.\n" +
    "C	PASTE	ACMSIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering	PASTE	Software Eng.&Program lang.\n" +
    "C	APLAS	Asian Symposium on Programming Languages and Systems	APLAS	Software Eng.&Program lang.\n" +
    "C	APSEC	Asia-Pacific Software Engineering Conference	APSEC	Software Eng.&Program lang.\n" +
    "C	EASE	Evaluation and Assessment in Software Engineering	EASE	Software Eng.&Program lang.\n" +
    "C	ICECCS	IEEE International Conference on Engineering of Complex Computer Systems	ICECCS	Software Eng.&Program lang.\n" +
    "C	ICST	IEEE International Conference on Software Testing, Verification and Validation	ICST	Software Eng.&Program lang.\n" +
    "C	ISPASS	IEEE International Symposium on Performance Analysis of Systems and Software	ISPASS	Software Eng.&Program lang.\n" +
    "C	SCAM	IEEE International Working Conference on Source Code Analysis and Manipulation	SCAM	Software Eng.&Program lang.\n" +
    "C	COMPSAC	International Computer Software and Applications Conference	COMPSAC	Software Eng.&Program lang.\n" +
    "C	ICFEM	International Conference on Formal Engineering Methods	ICFEM	Software Eng.&Program lang.\n" +
    "C	TOOLS	International Conference on Objects, Models, Components, Patterns	TOOLS	Software Eng.&Program lang.\n" +
    "C	QSIC	International Conference on Quality Software	QSIC	Software Eng.&Program lang.\n" +
    "C	SCC	International Conference on Service Computing	SCC	Software Eng.&Program lang.\n" +
    "C	ICSSP	International Conference on Software and System Process	ICSSP	Software Eng.&Program lang.\n" +
    "C	SEKE	International Conference on Software Engineering and Knowledge Engineering	SEKE	Software Eng.&Program lang.\n" +
    "C	ICSR	International Conference on Software Reuse	ICSR	Software Eng.&Program lang.\n" +
    "C	ICWE	International Conference on Web Engineering	ICWE	Software Eng.&Program lang.\n" +
    "C	SPIN	International SPIN Workshop on Model Checking of Software	SPIN	Software Eng.&Program lang.\n" +
    "C	ATVA	International Symposium on Automated Technology for Verification and Analysis	ATVA	Software Eng.&Program lang.\n" +
    "C	LOPSTR	International Symposium on Logic-based Program Synthesis and Transformation	LOPSTR	Software Eng.&Program lang.\n" +
    "C	TASE	International Symposium on Theoretical Aspects of Software Engineering	TASE	Software Eng.&Program lang.\n" +
    "C	MSR	Mining Software Repositories	MSR	Software Eng.&Program lang.\n" +
    "C	REFSQ	Requirements Engineering: Foundation for Software Quality	REFSQ	Software Eng.&Program lang.\n" +
    "C	WICSA	Working IEEE/IFIP Conference on Software Architecture	WICSA	Software Eng.&Program lang.\n" +
    "A	 TODS	ACM Transactions on Database Systems	ACM Trans. Database Syst.	Database&Data Mining\n" +
    "A	 TOIS	ACM Transactions on Information Systems	ACM Trans. Inf. Syst.	Database&Data Mining\n" +
    "A	 TKDE	IEEE Transactions on Knowledge and Data Engineering	IEEE Trans. Knowl. Data Eng.	Database&Data Mining\n" +
    "A	 VLDBJ	The VLDB Journal	VLDB J.	Database&Data Mining\n" +
    "B	TKDD	ACM Transactions on Knowledge Discovery from Data	TKDD	Database&Data Mining\n" +
    "B	TWEB	ACM Transactions on the Web	TWEB	Database&Data Mining\n" +
    "B	AEI	Advanced Engineering Informatics	Advanced Engineering Informatics	Database&Data Mining\n" +
    "B	DKE	Data and Knowledge Engineering	Data Knowl. Eng.	Database&Data Mining\n" +
    "B	DMKD	Data Mining and Knowledge Discovery	Data Min. Knowl. Discov.	Database&Data Mining\n" +
    "B	EJIS	European Journal of Information Systems	EJIS	Database&Data Mining\n" +
    "B		GeoInformatica	GeoInformatica	Database&Data Mining\n" +
    "B	IPM	Information Processing and Management	Inf. Process. Manage.	Database&Data Mining\n" +
    "B		Information Sciences	Inf. Sci.	Database&Data Mining\n" +
    "B	IS	Information Systems	Inf. Syst.	Database&Data Mining\n" +
    "B	JASIST	Journal of the American Society for Information Science and Technology	JASIST	Database&Data Mining\n" +
    "B	JWS	Journal of Web Semantics	J. Web Semant.	Database&Data Mining\n" +
    "B	KAIS	Knowledge and Information Systems	Knowl. Inf. Syst.	Database&Data Mining\n" +
    "C	DPD	Distributed and Parallel Databases	Distributed and Parallel Databases	Database&Data Mining\n" +
    "C	I&M	Information and Management	Information & Management	Database&Data Mining\n" +
    "C	IPL	Information Processing Letters	Inf. Process. Lett.	Database&Data Mining\n" +
    "C	IR	Information Retrieval Journal	Inf. Retr. Journal	Database&Data Mining\n" +
    "C	IJCIS	International Journal of Cooperative Information Systems	Int. J. Cooperative Inf. Syst.	Database&Data Mining\n" +
    "C	IJGIS	International Journal of Geographical Information Science	International Journal of Geographical Information Science	Database&Data Mining\n" +
    "C	IJIS	International Journal of Intelligent Systems	Int. J. Intell. Syst.	Database&Data Mining\n" +
    "C	IJKM	International Journal of Knowledge Management	IJKM	Database&Data Mining\n" +
    "C	IJSWIS	International Journal on Semantic Web and Information Systems	Int. J. Semantic Web Inf. Syst.	Database&Data Mining\n" +
    "C	JCIS	Journal of Computer Information Systems	JCIS	Database&Data Mining\n" +
    "C	JDM	Journal of Database Management	J. Database Manag.	Database&Data Mining\n" +
    "C	JGITM	Journal of Global Information Technology Management		Database&Data Mining\n" +
    "C	JIIS	Journal of Intelligent Information Systems	J. Intell. Inf. Syst.	Database&Data Mining\n" +
    "C	JSIS	Journal of Strategic Information Systems	J. Strategic Inf. Sys.	Database&Data Mining\n" +
    "A	SIGMOD	ACM Conference on Management of Data	SIGMOD Conference	Database&Data Mining\n" +
    "A	SIGKDD	ACM Knowledge Discovery and Data Mining	KDD	Database&Data Mining\n" +
    "A	ICDE	IEEE International Conference on Data Engineering	ICDE	Database&Data Mining\n" +
    "A	SIGIR	International Conference on Research on Development in Information Retrieval	SIGIR	Database&Data Mining\n" +
    "A	VLDB	International Conference on Very Large Data Bases	VLDB	Database&Data Mining\n" +
    "B	CIKM	ACM International Conference on Information and Knowledge Management	CIKM	Database&Data Mining\n" +
    "B	WSDM	ACM International Conference on Web Search and Data Mining	WSDM	Database&Data Mining\n" +
    "B	PODS	ACM Symposium on Principles of Database Systems	PODS	Database&Data Mining\n" +
    "B	DASFAA	Database Systems for Advanced Applications	DASFAA	Database&Data Mining\n" +
    "B	ECML-PKDD	European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases	ECML/PKDD	Database&Data Mining\n" +
    "B	ISWC	IEEE International Semantic Web Conference	International Semantic Web Conference	Database&Data Mining\n" +
    "B	ICDM	International Conference on Data Mining	ICDM	Database&Data Mining\n" +
    "B	ICDT	International Conference on Database Theory	ICDT	Database&Data Mining\n" +
    "B	EDBT	International Conference on Extending DB Technology	EDBT	Database&Data Mining\n" +
    "B	CIDR	International Conference on Innovative Data Systems Research	CIDR	Database&Data Mining\n" +
    "B	SDM	SIAM International Conference on Data Mining	SDM	Database&Data Mining\n" +
    "C	APWeb	Asia Pacific Web Conference	APWeb	Database&Data Mining\n" +
    "C	DEXA	Database and Expert System Applications	DEXA	Database&Data Mining\n" +
    "C	ECIR	European Conference on IR Research	ECIR	Database&Data Mining\n" +
    "C	ESWC	Extended Semantic Web Conference	ESWC	Database&Data Mining\n" +
    "C	WebDB	International ACM Workshop on Web and Databases	WebDB	Database&Data Mining\n" +
    "C	ER	International Conference on Conceptual Modeling	ER	Database&Data Mining\n" +
    "C	MDM	International Conference on Mobile Data Management	MDM	Database&Data Mining\n" +
    "C	SSDBM	International Conference on Scientific and Statistical DB Management	SSDBM	Database&Data Mining\n" +
    "C	WAIM	International Conference on Web Age Information Management	WAIM	Database&Data Mining\n" +
    "C	SSTD	International Symposium on Spatial and Temporal Databases	SSTD	Database&Data Mining\n" +
    "C	PAKDD	Pacific-Asia Conference on Knowledge Discovery and Data Mining	PAKDD	Database&Data Mining\n" +
    "C	WISE	Web Information Systems Engineering	WISE	Database&Data Mining\n" +
    "A	TIT	IEEE Transactions on Information Theory	IEEE Trans. Information Theory	Theory\n" +
    "A	IANDC	Information and Computation	Inf. Comput.	Theory\n" +
    "A	SICOMP	SIAM Journal on Computing	SIAM J. Comput.	Theory\n" +
    "B	TALG	ACM Transactions on Algorithms	ACM Trans. Algorithms	Theory\n" +
    "B	TOCL	ACM Transactions on Computational Logic	ACM Trans. Comput. Log.	Theory\n" +
    "B	TOMS	ACM Transactions on Mathematical Software	ACM Trans. Math. Softw.	Theory\n" +
    "B	Algorithmica	Algorithmica	Algorithmica	Theory\n" +
    "B	CC	Computational complexity	Computational Complexity	Theory\n" +
    "B	FAC	Formal Aspects of Computing	Formal Asp. Comput.	Theory\n" +
    "B	FMSD	Formal Methods in System Design	Formal Methods in System Design	Theory\n" +
    "B	INFORMS	INFORMS Journal on Computing	INFORMS Journal on Computing	Theory\n" +
    "B	JCSS	Journal of Computer and System Sciences	J. Comput. Syst. Sci.	Theory\n" +
    "B	JGO	Journal of Global Optimization	J. Global Optimization	Theory\n" +
    "B	JSC	Journal of Symbolic Computation	J. Symb. Comput.	Theory\n" +
    "B	MSCS	Mathematical Structures in Computer Science	Mathematical Structures in Computer Science	Theory\n" +
    "B	TCS	Theoretical Computer Science	Theor. Comput. Sci.	Theory\n" +
    "C	ACTA	Acta Informatica	Acta Inf.	Theory\n" +
    "C	APAL	Annals of Pure and Applied Logic	Ann. Pure Appl. Logic	Theory\n" +
    "C	DAM	Discrete Applied Mathematics	Discrete Applied Mathematics	Theory\n" +
    "C	FUIN	Fundamenta Informaticae	Fundam. Inform.	Theory\n" +
    "C	LISP	Higher-Order and Symbolic Computation	Higher-Order and Symbolic Computation	Theory\n" +
    "C	IPL	Information Processing Letters	Inf. Process. Lett.	Theory\n" +
    "C	JCOMPLEXITY	Journal of Complexity	J. Complexity	Theory\n" +
    "C	LOGCOM	Journal of Logic and Computation	J. Log. Comput.	Theory\n" +
    "C	JSL	Journal of Symbolic Logic	J. Symb. Log.	Theory\n" +
    "C	LMCS	Logical Methods in Computer Science	Logical Methods in Computer Science	Theory\n" +
    "C	SIDMA	SIAM Journal on Discrete Mathematics	SIAM J. Discrete Math.	Theory\n" +
    "C		Theory of Computing Systems	Theory Comput. Syst.	Theory\n" +
    "A	STOC	ACM Symposium on Theory of Computing	STOC	Theory\n" +
    "A	SODA	ACM-SIAM Symposium on Discrete Algorithms	SODA	Theory\n" +
    "A	CAV	Computer Aided Verification	CAV	Theory\n" +
    "A	FOCS	IEEE Annual Symposium on Foundations of Computer Science	FOCS	Theory\n" +
    "A	LICS	IEEE Symposium on Logic in Computer Science	LICS	Theory\n" +
    "B	SoCG	ACM Symposium on Computational Geometry	SoCG	Theory\n" +
    "B	ESA	European Symposium on Algorithms	ESA	Theory\n" +
    "B	CCC	IEEE Conference on Computational Complexity	CCC	Theory\n" +
    "B	ICALP	International Colloquium on Automata, Languages and Programming	ICALP	Theory\n" +
    "B	CADE/IJCAR	International Conference on Automated Deduction/International Joint Conference on Automated Reasoning	CADE	Theory\n" +
    "B	CONCUR	International Conference on Concurrency Theory	CONCUR	Theory\n" +
    "B	HSCC	International Conference on Hybrid Systems: Computation and Control	HSCC	Theory\n" +
    "B	SAT	Theory and Applications of Satisfiability Testing	SAT	Theory\n" +
    "C	CSL	Computer Science Logic	CSL	Theory\n" +
    "C	FMCAD	Formal Method in Computer-Aided Design	FMCAD	Theory\n" +
    "C	FSTTCS	Foundations of Software Technology and Theoretical Computer Science	FSTTCS	Theory\n" +
    "C	DSAA	IEEE International Conference on Data Science and Advanced Analytics	DSAA	Theory\n" +
    "C	ICTAC	International Colloquium on Theoretical Aspects of Computing	ICTAC	Theory\n" +
    "C	IPCO	International Conference on Integer Programming and Combinatorial Optimization	IPCO	Theory\n" +
    "C	RTA	International Conference on Rewriting Techniques and Applications	RTA	Theory\n" +
    "C	ISAAC	International Symposium on Algorithms and Computation	ISAAC	Theory\n" +
    "C	MFCS	Mathematical Foundations of Computer Science	MFCS	Theory\n" +
    "C	STACS	Symposium on Theoretical Aspects of Computer Science	STACS	Theory\n" +
    "A	TOG	ACM Transactions on Graphics	ACM Trans. Graph.	CG&MM\n" +
    "A	TIP	IEEE Transactions on Image Processing	IEEE Trans. Image Processing	CG&MM\n" +
    "A	TVCG	IEEE Transactions on Visualization and Computer Graphics	IEEE Trans. Vis. Comput. Graph.	CG&MM\n" +
    "B	TOMCCAP	ACM Transactions on Multimedia Computing,Communications and Application	TOMCCAP	CG&MM\n" +
    "B	CAGD	Computer Aided Geometric Design	Computer Aided Geometric Design	CG&MM\n" +
    "B	CGF	Computer Graphics Forum	Comput. Graph. Forum	CG&MM\n" +
    "B	CAD	Computer-Aided Design	Computer-Aided Design	CG&MM\n" +
    "B	GM	Graphical Models	Graphical Models	CG&MM\n" +
    "B	TCSVT	IEEE Transactions on Circuits and Systems for Video Technology	IEEE Trans. Circuits Syst. Video Techn.	CG&MM\n" +
    "B	TMM	IEEE Transactions on Multimedia	IEEE Trans. Multimedia	CG&MM\n" +
    "B	JASA	Journal of The Acoustical Society of America		CG&MM\n" +
    "B	SIIMS	SIAM Journal on Imaging Sciences	SIAM J. Imaging Sciences	CG&MM\n" +
    "B	Speech Com	Speech Communication	Speech Communication	CG&MM\n" +
    "C	CGTA	Computational Geometry: Theory and Applications	Comput. Geom.	CG&MM\n" +
    "C	CAVW	Computer Animation and Virtual Worlds		CG&MM\n" +
    "C	C&G	Computers & Graphics	Computers & Graphics	CG&MM\n" +
    "C	DCG	Discrete & Computational Geometry	Discrete & Computational Geometry	CG&MM\n" +
    "C	SPL	IEEE Signal Processing Letters	IEEE Signal Process. Lett.	CG&MM\n" +
    "C	IET-IPR	IET Image Processing	IET Image Processing	CG&MM\n" +
    "C	JVCIR	Journal of Visual Communication and Image Representation	J. Visual Communication and Image Representation	CG&MM\n" +
    "C	MS	Multimedia Systems	Multimedia Syst.	CG&MM\n" +
    "C	MTA	Multimedia Tools and Applications	Multimedia Tools Appl.	CG&MM\n" +
    "C		Signal Processing	Signal Processing	CG&MM\n" +
    "C	SPIC	Signal processing : image communication	Sig. Proc.: Image Comm.	CG&MM\n" +
    "C	TVC	The Visual Computer	The Visual Computer	CG&MM\n" +
    "A	ACM MM	ACM International Conference on Multimedia	ACM Multimedia	CG&MM\n" +
    "A	SIGGRAPH	ACM SIGGRAPH Annual Conference	SIGGRAPH	CG&MM\n" +
    "A	VR	IEEE Virtual Reality	VR	CG&MM\n" +
    "A	IEEE VIS	IEEE Visualization Conference	IEEE Trans. Vis. Comput. Graph.	CG&MM\n" +
    "B	ICMR	ACM SIGMM International Conference on Multimedia Retrieval	ICMR	CG&MM\n" +
    "B	SI3D	ACM Symposium on Interactive 3D Graphics	I3D	CG&MM\n" +
    "B	SCA	ACM/Eurographics Symposium on Computer Animation	Symposium on Computer Animation	CG&MM\n" +
    "B	DCC	Data Compression Conference	DCC	CG&MM\n" +
    "B	EG	Eurographics	Eurographics	CG&MM\n" +
    "B	EuroVis	Eurographics Conference on Visualization	EuroVis	CG&MM\n" +
    "B	SGP	Eurographics Symposium on Geometry Processing	Symposium on Geometry Processing	CG&MM\n" +
    "B	EGSR	Eurographics Symposium on Rendering	EGSR	CG&MM\n" +
    "B	ICASSP	IEEE International Conference on Acoustics,Speech and SP	ICASSP	CG&MM\n" +
    "B	ICME	IEEE International Conference on Multimedia& Expo	ICME	CG&MM\n" +
    "B	ISMAR	International Symposium on Mixed and Augmented Reality	ISMAR	CG&MM\n" +
    "B	PG	Pacific Graphics: The Pacific Conference on Computer Graphics and Applications	PG	CG&MM\n" +
    "B	SPM	Symposium on Solid and Physical Modeling	Symposium on Solid and Physical Modeling	CG&MM\n" +
    "C		ACM Symposium on Virtual Reality Software and Technology	VRST	CG&MM\n" +
    "C	CASA	Computer Animation and Social Agents	CASA	CG&MM\n" +
    "C	CGI	Computer Graphics International	CGI	CG&MM\n" +
    "C	INTERSPEECH	Conference of the International SpeechCommunication Association	INTERSPEECH	CG&MM\n" +
    "C	GMP	Geometric Modeling and Processing	GMP	CG&MM\n" +
    "C	PacificVis	IEEE Pacific Visualization Symposium	PacificVis	CG&MM\n" +
    "C	3DV	International Conference on 3D Vision	3DV	CG&MM\n" +
    "C	CAD/Graphics	International Conference on Computer-Aided Design and Computer Graphics	CAD/Graphics	CG&MM\n" +
    "C	ICIP	International Conference on Image Processing	ICIP	CG&MM\n" +
    "C	MMM	International Conference on Multimedia Modeling	MMM	CG&MM\n" +
    "C	PCM	Pacific-Rim Conference on Multimedia	PCM	CG&MM\n" +
    "C	SMI	Shape Modeling International	Shape Modeling International	CG&MM\n" +
    "A	AI	Artificial Intelligence	Artif. Intell.	AI\n" +
    "A	TPAMI	IEEE Trans on Pattern Analysis and Machine Intelligence	IEEE Trans. Pattern Anal. Mach. Intell.	AI\n" +
    "A	IJCV	International Journal of Computer Vision	International Journal of Computer Vision	AI\n" +
    "A	JMLR	Journal of Machine Learning Research	J. Mach. Learn. Res.	AI\n" +
    "B	TAP	ACM Transactions on Applied Perception	TAP	AI\n" +
    "B	TSLP	ACM Transactions on Speech and Language Processing	TSLP	AI\n" +
    "B	AAMAS	Autonomous Agents and Multi-Agent Systems	Autonomous Agents and Multi-Agent Systems	AI\n" +
    "B		Computational Linguistics	Computational Linguistics	AI\n" +
    "B	CVIU	Computer Vision and Image Understanding	Computer Vision and Image Understanding	AI\n" +
    "B	DKE	Data and Knowledge Engineering	Data Knowl. Eng.	AI\n" +
    "B		Evolutionary Computation	Evolutionary Computation	AI\n" +
    "B	TAC	IEEE Transactions on Affective Computing	IEEE Trans. Affective Computing	AI\n" +
    "B	TASLP	IEEE Transactions on Audio, Speech, and Language Processing	IEEE/ACM Trans. Audio, Speech & Language Processing	AI\n" +
    "B		IEEE Transactions on Cybernetics	IEEE Trans. Cybernetics	AI\n" +
    "B	TEC	IEEE Transactions on Evolutionary Computation	IEEE Trans. Evolutionary Computation	AI\n" +
    "B	TFS	IEEE Transactions on Fuzzy Systems	IEEE Trans. Fuzzy Systems	AI\n" +
    "B	TNNLS	IEEE Transactions on Neural Networks and learning systems	IEEE Trans. Neural Netw. Learning Syst.	AI\n" +
    "B	IJAR	International Journal of Approximate Reasoning	Int. J. Approx. Reasoning	AI\n" +
    "B	JAIR	Journal of Artificial Intelligence Research	J. Artif. Intell. Res.	AI\n" +
    "B		Journal of Automated Reasoning	J. Autom. Reasoning	AI\n" +
    "B	JSLHR	Journal of Speech, Language, and Hearing Research		AI\n" +
    "B		Machine Learning	Machine Learning	AI\n" +
    "B		Neural Computation	Neural Computation	AI\n" +
    "B		Neural Networks	Neural Networks	AI\n" +
    "B		Pattern Recognition	Pattern Recognition	AI\n" +
    "C	TALLIP	ACM Transactions on Asian and Low-Resource Language Information Processing	ACM Trans. Asian & Low-Resource Lang. Inf. Process.	AI\n" +
    "C		Applied Intelligence	Appl. Intell.	AI\n" +
    "C	AIM	Artificial Intelligence in Medicine	Artificial Intelligence in Medicine	AI\n" +
    "C		Artificial Life	Artificial Life	AI\n" +
    "C		Computational Intelligence	Computational Intelligence	AI\n" +
    "C		Computer Speech and Language	Computer Speech & Language	AI\n" +
    "C		Connection Science	Connect. Sci.	AI\n" +
    "C	DSS	Decision Support Systems	Decision Support Systems	AI\n" +
    "C	EAAI	Engineering Applications of Artificial Intelligence	Eng. Appl. of AI	AI\n" +
    "C		Expert Systems	Expert Systems	AI\n" +
    "C	ESWA	Expert Systems with Applications	Expert Syst. Appl.	AI\n" +
    "C		Fuzzy Sets and Systems	Fuzzy Sets and Systems	AI\n" +
    "C	TG	IEEE Transactions on Games	IEEE Trans. Games	AI\n" +
    "C	IET-CVI	IET Computer Vision	IET Computer Vision	AI\n" +
    "C		IET Signal Processing	IET Signal Processing	AI\n" +
    "C	IVC	Image and Vision Computing	Image Vision Comput.	AI\n" +
    "C	IDA	Intelligent Data Analysis	Intell. Data Anal.	AI\n" +
    "C	IJCIA	International Journal of Computational Intelligence and Applications	International Journal of Computational Intelligence and Applications	AI\n" +
    "C	IJIS	International Journal of Intelligent Systems	Int. J. Intell. Syst.	AI\n" +
    "C	IJNS	International Journal of Neural Systems	Int. J. Neural Syst.	AI\n" +
    "C	IJPRAI	International Journal of Pattern Recognition and Artificial Intelligence	IJPRAI	AI\n" +
    "C	IJUFKS	International Journal of Uncertainty, Fuzziness and Knowledge-Based System	International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems	AI\n" +
    "C	IJDAR	International Journal on Document Analysis and Recognition	IJDAR	AI\n" +
    "C	JETAI	Journal of Experimental and Theoretical Artificial Intelligence	J. Exp. Theor. Artif. Intell.	AI\n" +
    "C	KBS	Knowledge-Based Systems	Knowl.-Based Syst.	AI\n" +
    "C		Machine Translation	Machine Translation	AI\n" +
    "C		Machine Vision and Applications	Mach. Vis. Appl.	AI\n" +
    "C		Natural Computing	Natural Computing	AI\n" +
    "C	NLE	Natural Language Engineering	Natural Language Engineering	AI\n" +
    "C	NCA	Neural Computing & Applications	Neural Computing and Applications	AI\n" +
    "C	NPL	Neural Processing Letters	Neural Processing Letters	AI\n" +
    "C		Neurocomputing	Neurocomputing	AI\n" +
    "C	PAA	Pattern Analysis and Applications	Pattern Anal. Appl.	AI\n" +
    "C	PRL	Pattern Recognition Letters	Pattern Recognition Letters	AI\n" +
    "C		Soft Computing	Soft Comput.	AI\n" +
    "C	WI	Web Intelligence	Web Intelligence	AI\n" +
    "A	AAAI	AAAI Conference on Artificial Intelligence	AAAI	AI\n" +
    "A	NeurIPS	Annual Conference on Neural Information Processing Systems	NeurIPS	AI\n" +
    "A	ACL	Annual Meeting of the Association for Computational Linguistics	ACL	AI\n" +
    "A	CVPR	IEEE Conference on Computer Vision and Pattern Recognition	CVPR	AI\n" +
    "A	ICCV	International Conference on Computer Vision	ICCV	AI\n" +
    "A	ICML	International Conference on Machine Learning	ICML	AI\n" +
    "A	IJCAI	International Joint Conference on Artificial Intelligence	IJCAI	AI\n" +
    "B	COLT	Annual Conference on Computational Learning Theory	COLT	AI\n" +
    "B	EMNLP	Conference on Empirical Methods in Natural Language Processing	EMNLP	AI\n" +
    "B	ECAI	European Conference on Artificial Intelligence	ECAI	AI\n" +
    "B	ECCV	European Conference on Computer Vision	ECCV	AI\n" +
    "B	ICRA	IEEE International Conference on Robotics and Automation	ICRA	AI\n" +
    "B	ICAPS	International Conference on Automated Planning and Scheduling	ICAPS	AI\n" +
    "B	ICCBR	International Conference on Case-Based Reasoning and Development	ICCBR	AI\n" +
    "B	COLING	International Conference on Computational Linguistics	COLING	AI\n" +
    "B	KR	International Conference on Principles of Knowledge Representation and Reasoning	KR	AI\n" +
    "B	UAI	International Conference on Uncertainty in Artificial Intelligence	UAI	AI\n" +
    "B	AAMAS	International Joint Conference on Autonomous Agents and Multi-agent Systems	AAMAS	AI\n" +
    "B	PPSN	Parallel Problem Solving from Nature	PPSN	AI\n" +
    "C	AISTATS	Artificial Intelligence and Statistics	AISTATS	AI\n" +
    "C	ACCV	Asian Conference on Computer Vision	ACCV	AI\n" +
    "C	ACML	Asian Conference on Machine Learning	ACML	AI\n" +
    "C	BMVC	British Machine Vision Conference	BMVC	AI\n" +
    "C	NLPCC	CCF International Conference on Natural Language Processing and Chinese Computing	NLPCC	AI\n" +
    "C	CoNLL	Conference on Computational Natural Language Learning	CoNLL	AI\n" +
    "C	GECCO	Genetic and Evolutionary Computation Conference	GECCO	AI\n" +
    "C	ICTAI	IEEE International Conference on Tools with Artificial Intelligence	ICTAI	AI\n" +
    "C	IROS	IEEE\RSJ International Conference on Intelligent Robots and Systems	IROS	AI\n" +
    "C	ALT	International Conference on Algorithmic Learning Theory	ALT	AI\n" +
    "C	ICANN	International Conference on Artificial Neural Networks	ICANN	AI\n" +
    "C	FG	International Conference on Automatic Face and Gesture Recognition	FG	AI\n" +
    "C	ICDAR	International Conference on Document Analysis and Recognition	ICDAR	AI\n" +
    "C	ILP	International Conference on Inductive Logic Programming	ILP	AI\n" +
    "C	KSEM	International conference on Knowledge Science,Engineering and Management	KSEM	AI\n" +
    "C	ICONIP	International Conference on Neural Information Processing	ICONIP	AI\n" +
    "C	ICPR	International Conference on Pattern Recognition	ICPR	AI\n" +
    "C	ICB	International Joint Conference on Biometrics	ICB	AI\n" +
    "C	IJCNN	International Joint Conference on Neural Networks	IJCNN	AI\n" +
    "C	PRICAI	Pacific Rim International Conference on Artificial Intelligence	PRICAI	AI\n" +
    "C	NAACL	The Annual Conference of the North American Chapter of the Association for Computational Linguistics	NAACL	AI\n" +
    "A	TOCHI	ACM Transactions on Computer-Human Interaction	ACM Trans. Comput.-Hum. Interact.	HCI&UC\n" +
    "A	IJHCS	International Journal of Human Computer Studies	Int. J. Hum.-Comput. Stud.	HCI&UC\n" +
    "B	CSCW	Computer Supported Cooperative Work	Computer Supported Cooperative Work	HCI&UC\n" +
    "B	HCI	Human Computer Interaction	Human-Computer Interaction	HCI&UC\n" +
    "B		IEEE Transactions on Human-Machine Systems	IEEE Trans. Human-Machine Systems	HCI&UC\n" +
    "B	IWC	Interacting with Computers	Interacting with Computers	HCI&UC\n" +
    "B	IJHCI	International Journal of Human-Computer Interaction	Int. J. Hum. Comput. Interaction	HCI&UC\n" +
    "B	UMUAI	User Modeling and User-Adapted Interaction	User Model. User-Adapt. Interact.	HCI&UC\n" +
    "C	BIT	Behaviour & Information Technology	Behaviour & IT	HCI&UC\n" +
    "C	PUC	Personal and Ubiquitous Computing	Personal and Ubiquitous Computing	HCI&UC\n" +
    "C	PMC	Pervasive and Mobile Computing	Pervasive and Mobile Computing	HCI&UC\n" +
    "A	CSCW	ACM Conference on Computer Supported Cooperative Work and Social Computing	CSCW	HCI&UC\n" +
    "A	CHI	ACM Conference on Human Factors in Computing Systems	CHI	HCI&UC\n" +
    "A	UbiComp	ACM International Conference on Ubiquitous Computing	UbiComp	HCI&UC\n" +
    "B	GROUP	ACM Conference on Supporting Group Work	GROUP	HCI&UC\n" +
    "B	IUI	ACM International Conference on Intelligent User Interfaces	IUI	HCI&UC\n" +
    "B	ITS	ACM International Conference on Interactive Tabletops and Surfaces	ISS	HCI&UC\n" +
    "B	UIST	ACM Symposium on User Interface Software and Technology	UIST	HCI&UC\n" +
    "B	ECSCW	European Conference on Computer Supported Cooperative Work	ECSCW	HCI&UC\n" +
    "B	PERCOM	IEEE International Conference on Pervasive Computing and Communications	PerCom	HCI&UC\n" +
    "B	MobileHCI	International Conference on Human Computer Interaction with Mobile Devices and Services	MobileHCI	HCI&UC\n" +
    "C	DIS	ACM Conference on Designing Interactive Systems	Conference on Designing Interactive Systems	HCI&UC\n" +
    "C	ICMI	ACM International Conference on Multimodal Interaction	ICMI	HCI&UC\n" +
    "C	ASSETS	ACM SIGACCESS Conference on Computers and Accessibility	ASSETS	HCI&UC\n" +
    "C	GI	Graphics Interface conference	Graphics Interface	HCI&UC\n" +
    "C	UIC	IEEE International Conference on Ubiquitous Intelligence and Computing	UIC	HCI&UC\n" +
    "C		IEEE World Haptics Conference	HAPTICS	HCI&UC\n" +
    "C	INTERACT	IFIP TC13 Conference on Human-Computer Interaction	INTERACT	HCI&UC\n" +
    "C	IDC	Interaction Design and Children	IDC	HCI&UC\n" +
    "C	CollaborateCom	International Conference on Collaborative Computing: Networking, Applications and Worksharing	CollaborateCom	HCI&UC\n" +
    "C	CSCWD	International Conference on Computer Supported Cooperative Work in Design	CSCWD	HCI&UC\n" +
    "C	CoopIS	International Conference on Cooperative Information Systems	CoopIS	HCI&UC\n" +
    "C	MobiQuitous	International Conference on Mobile and Ubiquitous Systems: Computing,Networking and Services	MobiQuitous	HCI&UC\n" +
    "C	AVI	International Working Conference on Advanced Visual Interfaces	AVI	HCI&UC\n" +
    "A	 JACM	Journal of the ACM	J. ACM	Cross&Emerging\n" +
    "A	 Proc. IEEE	Proceedings of the IEEE	Proceedings of the IEEE	Cross&Emerging\n" +
    "B		Bioinformatics	Bioinformatics	Cross&Emerging\n" +
    "B		Briefings in Bioinformatics	Briefings in Bioinformatics	Cross&Emerging\n" +
    "B	Cognition	Cognition: International Journal of Cognitive Science		Cross&Emerging\n" +
    "B	TASAE	IEEE Transactions on Automation Science and Engineering	IEEE Trans. Automation Science and Engineering	Cross&Emerging\n" +
    "B	TGARS	IEEE Transactions on Geoscience and Remote Sensing	IEEE Trans. Geoscience and Remote Sensing	Cross&Emerging\n" +
    "B	TITS	IEEE Transactions on Intelligent Transportation Systems	IEEE Trans. Intelligent Transportation Systems	Cross&Emerging\n" +
    "B	TMI	IEEE Transactions on Medical Imaging	IEEE Trans. Med. Imaging	Cross&Emerging\n" +
    "B	TR	IEEE Transactions on Robotics	IEEE Trans. Robotics	Cross&Emerging\n" +
    "B	TCBB	IEEE-ACM Transactions on Computational Biology and Bioinformatics	IEEE/ACM Trans. Comput. Biology Bioinform.	Cross&Emerging\n" +
    "B	JCST	Journal of Computer Science and Technology	J. Comput. Sci. Technol.	Cross&Emerging\n" +
    "B	JAMIA	Journal of the American Medical Informatics Association	JAMIA	Cross&Emerging\n" +
    "B		PLOS Computational Biology	PLoS Computational Biology	Cross&Emerging\n" +
    "B		Science China Information Sciences	SCIENCE CHINA Information Sciences	Cross&Emerging\n" +
    "B		The Computer Journal	Comput. J.	Cross&Emerging\n" +
    "B		World Wide Web Journal	World Wide Web Journal	Cross&Emerging\n" +
    "C		BMC Bioinformatics	BMC Bioinformatics	Cross&Emerging\n" +
    "C		Cybernetics and Systems	Cybernetics and Systems	Cross&Emerging\n" +
    "C	FCS	Frontiers of Computer Science	Frontiers Comput. Sci.	Cross&Emerging\n" +
    "C		IEEE Geoscience and Remote Sensing Letters	IEEE Geosci. Remote Sensing Lett.	Cross&Emerging\n" +
    "C	JBHI	IEEE Journal of Biomedical and Health Informatics	IEEE J. Biomedical and Health Informatics	Cross&Emerging\n" +
    "C	TBD	IEEE Transactions on Big Data	IEEE Trans. Big Data	Cross&Emerging\n" +
    "C		IET Intelligent Transport Systems		Cross&Emerging\n" +
    "C	JBI	Journal of Biomedical Informatics	Journal of Biomedical Informatics	Cross&Emerging\n" +
    "C		Medical Image Analysis	Medical Image Analysis	Cross&Emerging\n" +
    "A	WWW	International World Wide Web Conferences	WWW	Cross&Emerging\n" +
    "A	RTSS	Real-Time Systems Symposium	RTSS	Cross&Emerging\n" +
    "B	CogSci	Cognitive Science Society Annual Conference	CogSci	Cross&Emerging\n" +
    "B	BIBM	IEEE International Conference on Bioinformatics and Biomedicine	BIBM	Cross&Emerging\n" +
    "B	EMSOFT	International Conference on Embedded Software	EMSOFT	Cross&Emerging\n" +
    "B	ISMB	International conference on Intelligent Systems for Molecular Biology	ISMB	Cross&Emerging\n" +
    "B	RECOMB	International Conference on Research in Computational Molecular Biology	RECOMB	Cross&Emerging\n" +
    "C	AMIA	American Medical Informatics Association Annual Symposium	AMIA	Cross&Emerging\n" +
    "C	APBC	Asia Pacific Bioinformatics Conference	APBC	Cross&Emerging\n" +
    "C		IEEE International Conference on Big Data	BigData	Cross&Emerging\n" +
    "C		IEEE International Conference on Cloud Computing	CLOUD	Cross&Emerging\n" +
    "C	SMC	IEEE International Conference on Systems, Man, and Cybernetics	SMC	Cross&Emerging\n" +
    "C	COSIT	International Conference on Spatial Information Theory	COSIT	Cross&Emerging\n" +
    "C	ISBRA	International Symposium on Bioinformatics Research and Applications	The Cluster Affinity Distance for Phylogenies	Cross&Emerging";

var ccfRankingFullName = {};
var ccfRankingAbbrName = {};
var ccfRankingDblpName = {};
var ccfRankingAbbrCate = {};
for (x of rawRankingString.split('\n')) {
    y = x.split('\t');
    if (y[1] != "") {
        if (ccfRankingAbbrName[y[1]] == undefined) {
            ccfRankingAbbrName[y[1]] = {};
            ccfRankingAbbrCate[y[1]] = {};
        }
        ccfRankingAbbrName[y[1]][y[2]] = y[0];
        ccfRankingAbbrCate[y[1]][y[2]] = y[4];
    }
    ccfRankingFullName[y[2]] = y[0];
    ccfRankingDblpName[y[3]] = y[2];
}

const fs = require('fs');
fs.writeFileSync('ccfRankingAbbrName.js', "ccf.rankingAbbrName = " + JSON.stringify(ccfRankingAbbrName), 'utf8');
fs.writeFileSync('ccfRankingFullName.js', "ccf.rankingFullName = " + JSON.stringify(ccfRankingFullName), 'utf8');
fs.writeFileSync('ccfRankingDblpName.js', "ccf.rankingDblpName = " + JSON.stringify(ccfRankingDblpName), 'utf8');
fs.writeFileSync('ccfRankingAbbrCate.js', "ccf.rankingAbbrCate = " + JSON.stringify(ccfRankingAbbrCate), 'utf8');
