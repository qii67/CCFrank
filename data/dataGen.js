const rawRankingString =
    "A	TOCS	ACM Transactions on Computer Systems	ACM Trans. Comput. Syst.\n" +
    "A	TOS	ACM Transactions on Storage	TOS\n" +
    "A	TCAD	IEEE Transactions On Computer-Aided Design Of Integrated Circuits And System	IEEE Trans. on CAD of Integrated Circuits and Systems\n" +
    "A	TC	IEEE Transactions on Computers	IEEE Trans. Computers\n" +
    "A	TPDS	IEEE Transactions on Parallel and Distributed Systems	IEEE Trans. Parallel Distrib. Syst.\n" +
    "B	TACO	ACM Transactions on Architecture and Code Optimization	TACO\n" +
    "B	TAAS	ACM Transactions on Autonomous and Adaptive Systems	TAAS\n" +
    "B	TODAES	ACM Transactions on Design Automation of Electronic Systems	ACM Trans. Design Autom. Electr. Syst.\n" +
    "B	TECS	ACM Transactions on Embedded Computing Systems	ACM Trans. Embedded Comput. Syst.\n" +
    "B	TRETS	ACM Transactions on Reconfigurable Technology and Systems	TRETS\n" +
    "B	TVLSI	IEEE Transactions on Very Large Scale Integration (VLSI) Systems	IEEE Trans. VLSI Syst.\n" +
    "B	JPDC	Journal of Parallel and Distributed Computing	J. Parallel Distrib. Comput.\n" +
    "B	JSA	Journal of Systems Architecture: Embedded Software Design	Journal of Systems Architecture - Embedded Systems Design\n" +
    "B	PARCO	Parallel Computing	Parallel Computing\n" +
    "B		Performance Evaluation: An International Journal	Perform. Eval.\n" +
    "C	JETC	ACM Journal on Emerging Technologies in Computing Systems	JETC\n" +
    "C		Concurrency and Computation: Practice and Experience	Concurrency and Computation: Practice and Experience\n" +
    "C	DC	Distributed Computing	Distributed Computing\n" +
    "C	FGCS	Future Generation Computer Systems	Future Generation Comp. Syst.\n" +
    "C	TCC	IEEE Transactions on Cloud Computing	IEEE Trans. Cloud Computing\n" +
    "C	Integration	Integration, the VLSI Journal	Integration\n" +
    "C	JETTA	Journal of Electronic Testing-Theory and Applications	J. Electronic Testing\n" +
    "C	JGC	The Journal of Grid computing	J. Grid Comput.\n" +
    "C	MICPRO	Microprocessors and Microsystems: Embedded Hardware Design	Microprocessors and Microsystems - Embedded Hardware Design\n" +
    "C	RTS	Real-Time Systems	Real-Time Systems\n" +
    "C	TJSC	The Journal of Supercomputing	The Journal of Supercomputing\n" +
    "A	PPoPP	ACM SIGPLAN Symposium on Principles & Practice of Parallel Programming	PPoPP\n" +
    "A	FAST	Conference on File and Storage Technologies	FAST\n" +
    "A	DAC	Design Automation Conference	DAC\n" +
    "A	HPCA	High-Performance Computer Architecture	HPCA\n" +
    "A	MICRO	IEEE/ACM International Symposium on Microarchitecture	MICRO\n" +
    "A	SC	International Conference for High Performance Computing, Networking, Storage, and Analysis	SC\n" +
    "A	ASPLOS	International Conference on Architectural Support for Programming Languages and Operating Systems	ASPLOS\n" +
    "A	ISCA	International Symposium on Computer Architecture	ISCA\n" +
    "A	USENIX ATC	USENIX Annul Technical Conference	USENIX Annual Technical Conference\n" +
    "B	SOCC	ACM Symposium on Cloud Computing	SoCC\n" +
    "B	SPAA	ACM Symposium on Parallelism in Algorithms and Architectures	SPAA\n" +
    "B	PODC	ACM Symposium on Principles of Distributed Computing	PODC\n" +
    "B	FPGA	ACM/SIGDA International Symposium on Field-Programmable Gate Arrays	FPGA\n" +
    "B	CGO	Code Generation and Optimization	CGO\n" +
    "B	DATE	Design, Automation & Test in Europe	DATE\n" +
    "B	EuroSys	European Conference on Computer Systems	EuroSys\n" +
    "B	HOT CHIPS	ACM Symposium on High Performance Chips	Hot Chips Symposium\n" +
    "B	CLUSTER	IEEE International Conference on Cluster Computing	CLUSTER\n" +
    "B	ICCD	International Conference on Computer Design	ICCD\n" +
    "B	ICCAD	International Conference on Computer-Aided Design	ICCAD\n" +
    "B	ICDCS	International Conference on Distributed Computing Systems	ICDCS\n" +
    "B	CODES+ISSS	International Conference on Hardware/Software Co-design and System Synthesis	CODES+ISSS\n" +
    "B	HiPEAC	International Conference on High Performance and Embedded Architectures and Compilers	HiPEAC\n" +
    "B	SIGMETRICS	International Conference on Measurement and Modeling of Computer Systems	SIGMETRICS\n" +
    "B	PACT	International Conference on Parallel Architectures and Compilation Techniques	PACT\n" +
    "B	ICPP	International Conference on Parallel Processing	ICPP\n" +
    "B	ICS	International Conference on Supercomputing	ICS\n" +
    "B	VEE	International Conference on Virtual Execution Environments	VEE\n" +
    "B	IPDPS	International Parallel & Distributed Processing Symposium	IPDPS\n" +
    "B	Performance	International Symposium on Computer Performance, Modeling, Measurements and Evaluation	Performance\n" +
    "B	HPDC	International Symposium on High Performance Distributed Computing	HPDC\n" +
    "B	ITC	International Test Conference	ITC\n" +
    "B	LISA	Large Installation system Administration Conference	LISA\n" +
    "B	MSST	Mass Storage Systems and Technologies	MSST\n" +
    "B	RTAS	Real-Time and Embedded Technology and Applications Symposium	RTAS\n" +
    "C	CF	ACM International Conference on Computing Frontiers	CF\n" +
    "C	SYSTOR	ACM International Systems and Storage Conference	SYSTOR\n" +
    "C	NOCS	ACM/IEEE International Symposium on Networks-on-Chip	NOCS\n" +
    "C	ASAP	Application-Specific Systems, Architectures, and Processors	ASAP\n" +
    "C	ASP-DAC	Asia and South Pacific Design Automation Conference	ASP-DAC\n" +
    "C	Euro-Par	European Conference on Parallel and Distributed Computing	Euro-Par\n" +
    "C	ETS	European Test Symposium	ETS\n" +
    "C	FPL	Field Programmable Logic and Applications	FPL\n" +
    "C	FCCM	Field-Programmable Custom Computing Machines	FCCM\n" +
    "C	GLSVLSI	Great Lakes Symposium on VLSI	ACM Great Lakes Symposium on VLSI\n" +
    "C	ATS	IEEE Asian Test Symposium	ATS\n" +
    "C	HPCC	IEEE International Conference on High Performance Computing and Communications	HPCC\n" +
    "C	HiPC	IEEE International Conference on High Performance Computing, Data and Analytics	HiPC\n" +
    "C	MASCOTS	IEEE International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems	MASCOTS\n" +
    "C	ISPA	IEEE International Symposium on Parallel and Distributed Processing with Applications	ISPA\n" +
    "C	CCGRID	IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing	CCGRID\n" +
    "C	NPC	IFIP International Conference on Network and Parallel Computing	NPC\n" +
    "C	ICA3PP	International Conference on Algorithms and Architectures for Parallel Processing	ICA3PP\n" +
    "C	CASES	International Conference on Compilers, Architectures, and Synthesis for Embedded Systems	CASES\n" +
    "C	FPT	International Conference on Field-Programmable Technology	FPT\n" +
    "C	ICPADS	International Conference on Parallel and Distributed Systems	ICPADS\n" +
    "C	ISCAS	International Symposium on Circuits and Systems	ISCAS\n" +
    "C	ISLPED	International Symposium on Low Power Electronics and Design	ISLPED\n" +
    "C	ISPD	International Symposium on Physical Design	ISPD\n" +
    "C	HotI	Symposium on High-Performance Interconnects	Hot Interconnects\n" +
    "C	VTS	VLSI Test Symposium	VTS\n" +
    "A	JSAC	IEEE Journal of Selected Areas in Communications	IEEE Journal on Selected Areas in Communications\n" +
    "A	TMC	IEEE Transactions on Mobile Computing	IEEE Trans. Mob. Comput.\n" +
    "A	TON	IEEE/ACM Transactions on Networking	IEEE/ACM Trans. Netw.\n" +
    "B	TOIT	ACM Transactions on Internet Technology	ACM Trans. Internet Techn.\n" +
    "B	TOMCCAP	ACM Transactions on Multimedia Computing, Communications and Applications	TOMCCAP\n" +
    "B	TOSN	ACM Transactions on Sensor Networks	TOSN\n" +
    "B	CN	Computer Networks	Computer Networks\n" +
    "B	TCOM	IEEE Transactions on Communications	IEEE Trans. Communications\n" +
    "B	TWC	IEEE Transactions on Wireless Communications	IEEE Trans. Wireless Communications\n" +
    "C		Ad hoc Networks	Ad Hoc Networks\n" +
    "C	CC	Computer Communications	Computer Communications\n" +
    "C	TNSM	IEEE Transactions on Network and Service Management	IEEE Trans. Network and Service Management\n" +
    "C		IET Communications	IET Communications\n" +
    "C	JNCA	Journal of Network and Computer Applications	J. Network and Computer Applications\n" +
    "C	MONET	Mobile Networks & Applications	MONET\n" +
    "C		Networks	Networks\n" +
    "C	PPNA	Peer-to-Peer Networking and Applications	Peer-to-Peer Networking and Applications\n" +
    "C	WCMC	Wireless Communications & Mobile Computing	Wireless Communications and Mobile Computing\n" +
    "C		Wireless Networks	Wireless Networks\n" +
    "A	SIGCOMM	ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication	SIGCOMM\n" +
    "A	MobiCom	ACM International Conference on Mobile Computing and Networking	MobiCom\n" +
    "A	INFOCOM	IEEE International Conference on Computer Communications	INFOCOM\n" +
    "A	NSDI	Symposium on Network System Design and Implementation	NSDI\n" +
    "B	SenSys	ACM Conference on Embedded Networked Sensor Systems	SenSys\n" +
    "B	CoNEXT	ACM International Conference on emerging Networking EXperiments and Technologies	CoNEXT\n" +
    "B	SECON	IEEE Communications Society Conference on Sensor and Ad Hoc Communications and Networks	SECON\n" +
    "B	IPSN	International Conference on Information Processing in Sensor Networks	IPSN\n" +
    "B	MobiSys	International Conference on Mobile Systems, Applications, and Services	MobiSys\n" +
    "B	ICNP	International Conference on Network Protocols	ICNP\n" +
    "B	MobiHoc	International Symposium on Mobile Ad Hoc Networking and Computing	MobiHoc\n" +
    "B	NOSSDAV	International Workshop on Network and Operating System Support for Digital Audio and Video	NOSSDAV\n" +
    "B	IWQoS	International Workshop on Quality of Service	IWQoS\n" +
    "B	IMC	Internet Measurement Conference	IMC\n" +
    "C	ANCS	Architectures for Networking and Communications Systems	ANCS\n" +
    "C	APNOMS	Asia-Pacific Network Operations and Management Symposium	APNOMS\n" +
    "C	FORTE	Formal Techniques for Networked and Distributed Systems	FORTE\n" +
    "C	LCN	IEEE Conference on Local Computer Networks	LCN\n" +
    "C	GLOBECOM	IEEE Global Communications Conference	GLOBECOM\n" +
    "C	ICC	IEEE International Conference on Communications	ICC\n" +
    "C	ICCCN	IEEE International Conference on Computer Communications and Networks	ICCCN\n" +
    "C	MASS	IEEE International Conference on Mobile Ad-hoc and Sensor Systems	MASS\n" +
    "C	P2P	IEEE International Conference on P2P Computing	P2P\n" +
    "C	IPCCC	IEEE International Performance Computing and Communications Conference	IPCCC\n" +
    "C	WoWMoM	IEEE International Symposium on a World of Wireless Mobile and Multimedia Networks	WOWMOM\n" +
    "C	ISCC	IEEE Symposium on Computers and Communications	ISCC\n" +
    "C	WCNC	IEEE Wireless Communications & Networking Conference	WCNC\n" +
    "C	Networking	IFIP International Conferences on Networking	Networking\n" +
    "C	IM	IFIP/IEEE International Symposium on Integrated Network Management	IM\n" +
    "C	MSN	International Conference on Mobile Ad-hoc and Sensor Networks	MSN\n" +
    "C	MSWiM	International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems	MSWiM\n" +
    "C	WASA	International Conference on Wireless Algorithms, Systems, and Applications	WASA\n" +
    "C	HotNets	The Workshop on Hot Topics in Networks	HotNets\n" +
    "A	TDSC	IEEE Transactions on Dependable and Secure Computing	IEEE Trans. Dependable Sec. Comput.\n" +
    "A	TIFS	IEEE Transactions on Information Forensics and Security	IEEE Trans. Information Forensics and Security\n" +
    "A		Journal of Cryptology	J. Cryptology\n" +
    "B	TOPS	ACM Transactions on Privacy and Security	ACM Trans. Priv. Secur.\n" +
    "B		Computers & Security	Computers & Security\n" +
    "B		Designs, Codes and Cryptography	Des. Codes Cryptogr.\n" +
    "B	JCS	Journal of Computer Security	Journal of Computer Security\n" +
    "C	CLSR	Computer Law and Security Review	\n" +
    "C		EURASIP Journal on Information Security	EURASIP J. Information Security\n" +
    "C		IET Information Security	IET Information Security\n" +
    "C	IMCS	Information Management & Computer Security	Inf. & Comput. Security\n" +
    "C	IJICS	International Journal of Information and Computer Security	IJICS\n" +
    "C	IJISP	International Journal of Information Security and Privacy	IJISP\n" +
    "C	JISA	Journal of Information Security and Application	J. Inf. Sec. Appl.\n" +
    "C	SCN	Security and Communication Networks	Security and Communication Networks\n" +
    "A	CCS	ACM Conference on Computer and Communications Security	ACM Conference on Computer and Communications Security\n" +
    "A	EUROCRYPT	European Cryptology Conference	EUROCRYPT\n" +
    "A	S&P	IEEE Symposium on Security and Privacy	IEEE Symposium on Security and Privacy\n" +
    "A	CRYPTO	International Cryptology Conference	CRYPTO\n" +
    "A	USENIX Security	Usenix Security Symposium	USENIX Security Symposium\n" +
    "B	ACSAC	Annual Computer Security Applications Conference	ACSAC\n" +
    "B	ASIACRYPT	Annual International Conference on the Theory and Application of Cryptology and Information Security	ASIACRYPT\n" +
    "B	ESORICS	European Symposium on Research in Computer Security	ESORICS\n" +
    "B	FSE	Fast Software Encryption	FSE\n" +
    "B	CSFW	IEEE Computer Security Foundations Workshop	CSF\n" +
    "B	SRDS	IEEE International Symposium on Reliable Distributed Systems	SRDS\n" +
    "B	CHES	International Conference on Cryptographic Hardware and Embedded Systems	CHES\n" +
    "B	DSN	International Conference on Dependable Systems and Networks	DSN\n" +
    "B	RAID	International Symposium on Recent Advances in Intrusion Detection	RAID\n" +
    "B	PKC	International Workshop on Practice and Theory in Public Key Cryptography	Public Key Cryptography\n" +
    "B	NDSS	ISOC Network and Distributed System Security Symposium	NDSS\n" +
    "B	TCC	Theory of Cryptography Conference	TCC\n" +
    "C	WiSec	ACM Conference on Security and Privacy in Wireless and Mobile Networks	WiSec\n" +
    "C	SACMAT	ACM Symposium on Access Control Models and Technologies	SACMAT\n" +
    "C	DRM	ACM Workshop on Digital Rights Management	Digital Rights Management Workshop\n" +
    "C	IH&MMSec	ACM Workshop on Information Hiding and Multimedia Security	IH&MMSec\n" +
    "C	ACNS	Applied Cryptography and Network Security	ACNS\n" +
    "C	AsiaCCS	Asia Conference on Computer and Communications Security	AsiaCCS\n" +
    "C	ACISP	AustralasiaConferenceonInformation SecurityandPrivacy	ACISP\n" +
    "C	CT-RSA	RSA Conference, Cryptographers' Track	CT-RSA\n" +
    "C	DIMVA	Detection of Intrusions and Malware &Vulnerability Assessment	DIMVA\n" +
    "C	DFRWS	Digital Forensic Research Workshop	DFRWS\n" +
    "C	FC	Financial Cryptography and Data Security	Financial Cryptography Workshops\n" +
    "C	TrustCom	IEEE International Conference on Trust,Security and Privacy in Computing and Communications	TrustCom\n" +
    "C	SEC	IFIP International Information Security Conference	SEC\n" +
    "C	IFIP WG 11.9	IFIP WG 11.9 International Conference on Digital Forensics	IFIP Int. Conf. Digital Forensics\n" +
    "C	ISC	Information Security Conference	ISC\n" +
    "C	ICDF2C	International Conference on Digital Forensics & Cyber Crime	ICDF2C\n" +
    "C	ICICS	International Conference on Information and Communications Security	ICICS\n" +
    "C	SecureComm	International Conference on Security and Privacy in Communication Networks	SecureComm\n" +
    "C	NSPW	New Security Paradigms Workshop	NSPW\n" +
    "C	PAM	Passive and Active Measurement Conference	PAM\n" +
    "C	PETS	Privacy Enhancing Technologies Symposium	Privacy Enhancing Technologies\n" +
    "C	SAC	Selected Areas in Cryptography	SAC\n" +
    "C	SOUPS	Symposium On Usable Privacy and Security	SOUPS\n" +
    "C	HotSec	USENIX Workshop on Hot Topics in Security	HotSec\n" +
    "A	TOPLAS	ACM Transactions on Programming Languages & Systems	ACM Trans. Program. Lang. Syst.\n" +
    "A	TOSEM	ACM Transactions on Software Engineering and Methodology	ACM Trans. Softw. Eng. Methodol.\n" +
    "A	TSE	IEEE Transactions on Software Engineering	IEEE Trans. Software Eng.\n" +
    "B	ASE	Automated Software Engineering	Autom. Softw. Eng.\n" +
    "B	ESE	Empirical Software Engineering	Empirical Software Engineering\n" +
    "B	TSC	IEEE Transactions on Service Computing	IEEE Trans. Services Computing\n" +
    "B	IETS	IET Software	IET Software\n" +
    "B	IST	Information and Software Technology	Information & Software Technology\n" +
    "B	JFP	Journal of Functional Programming	J. Funct. Program.\n" +
    "B		Journal of Software: Evolution and Process	Journal of Software: Evolution and Process\n" +
    "B	JSS	Journal of Systems and Software	Journal of Systems and Softwar\n" +
    "B	RE	Requirements Engineering	Requir. Eng.\n" +
    "B	SCP	Science of Computer Programming	Sci. Comput. Program.\n" +
    "B	SoSyM	Software and System Modeling	Software and Systems Modeling\n" +
    "B	STVR	Software Testing, Verification and Reliability	Softw. Test., Verif. Reliab.\n" +
    "B	SPE	Software: Practice and Experience	Softw., Pract. Exper.\n" +
    "C	CL	Computer Languages, Systems and Structures	Computer Languages, Systems & Structures\n" +
    "C	IJSEKE	International Journal on Software Engineering and Knowledge Engineering	International Journal of Software Engineering and Knowledge Engineering\n" +
    "C	STTT	International Journal on Software Tools for Technology Transfer	STTT\n" +
    "C	JLAP	Journal of Logic and Algebraic Programming	J. Log. Algebr. Meth. Program.\n" +
    "C	JWE	Journal of Web Engineering	J. Web Eng.\n" +
    "C	SOCA	Service Oriented Computing and Applications	Service Oriented Computing and Applications\n" +
    "C	SQJ	Software Quality Journal	Software Quality Journal\n" +
    "C	TPLP	Theory and Practice of Logic Programming	TPLP\n" +
    "A	PLDI	ACM SIGPLAN Symposium on Programming Language Design & Implementation	PLDI\n" +
    "A	POPL	ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages	POPL\n" +
    "A	FSE/ESEC	ACM SIGSOFT Symposium on the Foundation of Software Engineering/ European Software Engineering Conference	SIGSOFT FSE/ESEC\n" +
    "A	SOSP	ACM Symposium on Operating Systems Principles	SOSP\n" +
    "A	OOPSLA	Conference on Object-Oriented Programming Systems, Languages,and Applications	OOPSLA\n" +
    "A	ASE	International Conference on Automated Software Engineering	ASE\n" +
    "A	ICSE	International Conference on Software Engineering	ICSE\n" +
    "A	ISSTA	International Symposium on Software Testing and Analysis	ISSTA\n" +
    "A	OSDI	USENIX Symposium on Operating Systems Design and Implementations	OSDI\n" +
    "B	ECOOP	European Conference on Object-Oriented Programming	ECOOP\n" +
    "B	ETAPS	European Joint Conferences on Theory and Practice of Software	ETAPS\n" +
    "B	ICPC	IEEE International Conference on Program Comprehension	ICPC\n" +
    "B	RE	IEEE International Requirement Engineering Conference	RE\n" +
    "B	CAiSE	International Conference on Advanced Information Systems Engineering	CAiSE\n" +
    "B	ICFP	International Conference on Function Programming	ICFP\n" +
    "B	LCTES	International Conference on Languages,Compilers, Tools and Theory for Embedded Systems	LCTES\n" +
    "B	MoDELS	International Conference on Model Driven Engineering Languages and Systems	MoDELS\n" +
    "B	CP	International Conference on Principles and Practice of Constraint Programming	CP\n" +
    "B	ICSOC	International Conference on Service Oriented Computing	ICSOC\n" +
    "B	SANER	International Conference on Software Analysis, Evolution, and Reengineering	SANER\n" +
    "B	ICSME	International Conference on Software Maintenance and Evolution	ICSME\n" +
    "B	VMCAI	International Conference on Verification,Model Checking, and Abstract Interpretation	VMCAI\n" +
    "B	ICWS	International Conference on Web Services(Research Track)	ICWS\n" +
    "B	Middleware	International Middleware Conference	Middleware\n" +
    "B	SAS	International Static Analysis Symposium	SAS\n" +
    "B	ESEM	International Symposium on Empirical Software Engineering and Measurement	ESEM\n" +
    "B	FM	International Symposium on Formal Methods	FM\n" +
    "B	ISSRE	International Symposium on Software Reliability Engineering	ISSRE\n" +
    "B	HotOS	USENIX Workshop on Hot Topics in Operating Systems	HotOS\n" +
    "C	PEPM	ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation	PEPM\n" +
    "C	PASTE	ACMSIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering	PASTE\n" +
    "C	APLAS	Asian Symposium on Programming Languages and Systems	APLAS\n" +
    "C	APSEC	Asia-Pacific Software Engineering Conference	APSEC\n" +
    "C	EASE	Evaluation and Assessment in Software Engineering	EASE\n" +
    "C	ICECCS	IEEE International Conference on Engineering of Complex Computer Systems	ICECCS\n" +
    "C	ICST	IEEE International Conference on Software Testing, Verification and Validation	ICST\n" +
    "C	ISPASS	IEEE International Symposium on Performance Analysis of Systems and Software	ISPASS\n" +
    "C	SCAM	IEEE International Working Conference on Source Code Analysis and Manipulation	SCAM\n" +
    "C	COMPSAC	International Computer Software and Applications Conference	COMPSAC\n" +
    "C	ICFEM	International Conference on Formal Engineering Methods	ICFEM\n" +
    "C	TOOLS	International Conference on Objects, Models, Components, Patterns	TOOLS\n" +
    "C	QSIC	International Conference on Quality Software	QSIC\n" +
    "C	SCC	International Conference on Service Computing	SCC\n" +
    "C	ICSSP	International Conference on Software and System Process	ICSSP\n" +
    "C	SEKE	International Conference on Software Engineering and Knowledge Engineering	SEKE\n" +
    "C	ICSR	International Conference on Software Reuse	ICSR\n" +
    "C	ICWE	International Conference on Web Engineering	ICWE\n" +
    "C	SPIN	International SPIN Workshop on Model Checking of Software	SPIN\n" +
    "C	ATVA	International Symposium on Automated Technology for Verification and Analysis	ATVA\n" +
    "C	LOPSTR	International Symposium on Logic-based Program Synthesis and Transformation	LOPSTR\n" +
    "C	TASE	International Symposium on Theoretical Aspects of Software Engineering	TASE\n" +
    "C	MSR	Mining Software Repositories	MSR\n" +
    "C	REFSQ	Requirements Engineering: Foundation for Software Quality	REFSQ\n" +
    "C	WICSA	Working IEEE/IFIP Conference on Software Architecture	WICSA\n" +
    "A 	TODS	ACM Transactions on Database Systems	ACM Trans. Database Syst.\n" +
    "A 	TOIS	ACM Transactions on Information Systems	ACM Trans. Inf. Syst.\n" +
    "A 	TKDE	IEEE Transactions on Knowledge and Data Engineering	IEEE Trans. Knowl. Data Eng.\n" +
    "A 	VLDBJ	The VLDB Journal	VLDB J.\n" +
    "B	TKDD	ACM Transactions on Knowledge Discovery from Data	TKDD\n" +
    "B	TWEB	ACM Transactions on the Web	TWEB\n" +
    "B	AEI	Advanced Engineering Informatics	Advanced Engineering Informatics\n" +
    "B	DKE	Data and Knowledge Engineering	Data Knowl. Eng.\n" +
    "B	DMKD	Data Mining and Knowledge Discovery	Data Min. Knowl. Discov.\n" +
    "B	EJIS	European Journal of Information Systems	EJIS\n" +
    "B		GeoInformatica	GeoInformatica\n" +
    "B	IPM	Information Processing and Management	Inf. Process. Manage.\n" +
    "B		Information Sciences	Inf. Sci.\n" +
    "B	IS	Information Systems	Inf. Syst.\n" +
    "B	JASIST	Journal of the American Society for Information Science and Technology	JASIST\n" +
    "B	JWS	Journal of Web Semantics	J. Web Semant.\n" +
    "B	KAIS	Knowledge and Information Systems	Knowl. Inf. Syst.\n" +
    "C	DPD	Distributed and Parallel Databases	Distributed and Parallel Databases\n" +
    "C	I&M	Information and Management	Information & Management\n" +
    "C	IPL	Information Processing Letters	Inf. Process. Lett.\n" +
    "C	IR	Information Retrieval Journal	Inf. Retr. Journal\n" +
    "C	IJCIS	International Journal of Cooperative Information Systems	Int. J. Cooperative Inf. Syst.\n" +
    "C	IJGIS	International Journal of Geographical Information Science	International Journal of Geographical Information Science\n" +
    "C	IJIS	International Journal of Intelligent Systems	Int. J. Intell. Syst.\n" +
    "C	IJKM	International Journal of Knowledge Management	IJKM\n" +
    "C	IJSWIS	International Journal on Semantic Web and Information Systems	Int. J. Semantic Web Inf. Syst.\n" +
    "C	JCIS	Journal of Computer Information Systems	JCIS\n" +
    "C	JDM	Journal of Database Management	J. Database Manag.\n" +
    "C	JGITM	Journal of Global Information Technology Management	\n" +
    "C	JIIS	Journal of Intelligent Information Systems	J. Intell. Inf. Syst.\n" +
    "C	JSIS	Journal of Strategic Information Systems	J. Strategic Inf. Sys.\n" +
    "A	SIGMOD	ACM Conference on Management of Data	SIGMOD Conference\n" +
    "A	SIGKDD	ACM Knowledge Discovery and Data Mining	KDD\n" +
    "A	ICDE	IEEE International Conference on Data Engineering	ICDE\n" +
    "A	SIGIR	International Conference on Research on Development in Information Retrieval	SIGIR\n" +
    "A	VLDB	International Conference on Very Large Data Bases	VLDB\n" +
    "B	CIKM	ACM International Conference on Information and Knowledge Management	CIKM\n" +
    "B	WSDM	ACM International Conference on Web Search and Data Mining	WSDM\n" +
    "B	PODS	ACM Symposium on Principles of Database Systems	PODS\n" +
    "B	DASFAA	Database Systems for Advanced Applications	DASFAA\n" +
    "B	ECML-PKDD	European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases	ECML/PKDD\n" +
    "B	ISWC	IEEE International Semantic Web Conference	International Semantic Web Conference\n" +
    "B	ICDM	International Conference on Data Mining	ICDM\n" +
    "B	ICDT	International Conference on Database Theory	ICDT\n" +
    "B	EDBT	International Conference on Extending DB Technology	EDBT\n" +
    "B	CIDR	International Conference on Innovative Data Systems Research	CIDR\n" +
    "B	SDM	SIAM International Conference on Data Mining	SDM\n" +
    "C	APWeb	Asia Pacific Web Conference	APWeb\n" +
    "C	DEXA	Database and Expert System Applications	DEXA\n" +
    "C	ECIR	European Conference on IR Research	ECIR\n" +
    "C	ESWC	Extended Semantic Web Conference	ESWC\n" +
    "C	WebDB	International ACM Workshop on Web and Databases	WebDB\n" +
    "C	ER	International Conference on Conceptual Modeling	ER\n" +
    "C	MDM	International Conference on Mobile Data Management	MDM\n" +
    "C	SSDBM	International Conference on Scientific and Statistical DB Management	SSDBM\n" +
    "C	WAIM	International Conference on Web Age Information Management	WAIM\n" +
    "C	SSTD	International Symposium on Spatial and Temporal Databases	SSTD\n" +
    "C	PAKDD	Pacific-Asia Conference on Knowledge Discovery and Data Mining	PAKDD\n" +
    "C	WISE	Web Information Systems Engineering	WISE\n" +
    "A	TIT	IEEE Transactions on Information Theory	IEEE Trans. Information Theory\n" +
    "A	IANDC	Information and Computation	Inf. Comput.\n" +
    "A	SICOMP	SIAM Journal on Computing	SIAM J. Comput.\n" +
    "B	TALG	ACM Transactions on Algorithms	ACM Trans. Algorithms\n" +
    "B	TOCL	ACM Transactions on Computational Logic	ACM Trans. Comput. Log.\n" +
    "B	TOMS	ACM Transactions on Mathematical Software	ACM Trans. Math. Softw.\n" +
    "B	Algorithmica	Algorithmica	Algorithmica\n" +
    "B	CC	Computational complexity	Computational Complexity\n" +
    "B	FAC	Formal Aspects of Computing	Formal Asp. Comput.\n" +
    "B	FMSD	Formal Methods in System Design	Formal Methods in System Design\n" +
    "B	INFORMS	INFORMS Journal on Computing	INFORMS Journal on Computing\n" +
    "B	JCSS	Journal of Computer and System Sciences	J. Comput. Syst. Sci.\n" +
    "B	JGO	Journal of Global Optimization	J. Global Optimization\n" +
    "B	JSC	Journal of Symbolic Computation	J. Symb. Comput.\n" +
    "B	MSCS	Mathematical Structures in Computer Science	Mathematical Structures in Computer Science\n" +
    "B	TCS	Theoretical Computer Science	Theor. Comput. Sci.\n" +
    "C	ACTA	Acta Informatica	Acta Inf.\n" +
    "C	APAL	Annals of Pure and Applied Logic	Ann. Pure Appl. Logic\n" +
    "C	DAM	Discrete Applied Mathematics	Discrete Applied Mathematics\n" +
    "C	FUIN	Fundamenta Informaticae	Fundam. Inform.\n" +
    "C	LISP	Higher-Order and Symbolic Computation	Higher-Order and Symbolic Computation\n" +
    "C	IPL	Information Processing Letters	Inf. Process. Lett.\n" +
    "C	JCOMPLEXITY	Journal of Complexity	J. Complexity\n" +
    "C	LOGCOM	Journal of Logic and Computation	J. Log. Comput.\n" +
    "C	JSL	Journal of Symbolic Logic	J. Symb. Log.\n" +
    "C	LMCS	Logical Methods in Computer Science	Logical Methods in Computer Science\n" +
    "C	SIDMA	SIAM Journal on Discrete Mathematics	SIAM J. Discrete Math.\n" +
    "C		Theory of Computing Systems	Theory Comput. Syst.\n" +
    "A	STOC	ACM Symposium on Theory of Computing	STOC\n" +
    "A	SODA	ACM-SIAM Symposium on Discrete Algorithms	SODA\n" +
    "A	CAV	Computer Aided Verification	CAV\n" +
    "A	FOCS	IEEE Annual Symposium on Foundations of Computer Science	FOCS\n" +
    "A	LICS	IEEE Symposium on Logic in Computer Science	LICS\n" +
    "B	SoCG	ACM Symposium on Computational Geometry	SoCG\n" +
    "B	ESA	European Symposium on Algorithms	ESA\n" +
    "B	CCC	IEEE Conference on Computational Complexity	CCC\n" +
    "B	ICALP	International Colloquium on Automata, Languages and Programming	ICALP\n" +
    "B	CADE/IJCAR	International Conference on Automated Deduction/International Joint Conference on Automated Reasoning	CADE\n" +
    "B	CONCUR	International Conference on Concurrency Theory	CONCUR\n" +
    "B	HSCC	International Conference on Hybrid Systems: Computation and Control	HSCC\n" +
    "B	SAT	Theory and Applications of Satisfiability Testing	SAT\n" +
    "C	CSL	Computer Science Logic	CSL\n" +
    "C	FMCAD	Formal Method in Computer-Aided Design	FMCAD\n" +
    "C	FSTTCS	Foundations of Software Technology and Theoretical Computer Science	FSTTCS\n" +
    "C	DSAA	IEEE International Conference on Data Science and Advanced Analytics	DSAA\n" +
    "C	ICTAC	International Colloquium on Theoretical Aspects of Computing	ICTAC\n" +
    "C	IPCO	International Conference on Integer Programming and Combinatorial Optimization	IPCO\n" +
    "C	RTA	International Conference on Rewriting Techniques and Applications	RTA\n" +
    "C	ISAAC	International Symposium on Algorithms and Computation	ISAAC\n" +
    "C	MFCS	Mathematical Foundations of Computer Science	MFCS\n" +
    "C	STACS	Symposium on Theoretical Aspects of Computer Science	STACS\n" +
    "A	TOG	ACM Transactions on Graphics	ACM Trans. Graph.\n" +
    "A	TIP	IEEE Transactions on Image Processing	IEEE Trans. Image Processing\n" +
    "A	TVCG	IEEE Transactions on Visualization and Computer Graphics	IEEE Trans. Vis. Comput. Graph.\n" +
    "B	TOMCCAP	ACM Transactions on Multimedia Computing,Communications and Application	TOMCCAP\n" +
    "B	CAGD	Computer Aided Geometric Design	Computer Aided Geometric Design\n" +
    "B	CGF	Computer Graphics Forum	Comput. Graph. Forum\n" +
    "B	CAD	Computer-Aided Design	Computer-Aided Design\n" +
    "B	GM	Graphical Models	Graphical Models\n" +
    "B	TCSVT	IEEE Transactions on Circuits and Systems for Video Technology	IEEE Trans. Circuits Syst. Video Techn.\n" +
    "B	TMM	IEEE Transactions on Multimedia	IEEE Trans. Multimedia\n" +
    "B	JASA	Journal of The Acoustical Society of America	\n" +
    "B	SIIMS	SIAM Journal on Imaging Sciences	SIAM J. Imaging Sciences\n" +
    "B	Speech Com	Speech Communication	Speech Communication\n" +
    "C	CGTA	Computational Geometry: Theory and Applications	Comput. Geom.\n" +
    "C	CAVW	Computer Animation and Virtual Worlds	\n" +
    "C	C&G	Computers & Graphics	Computers & Graphics\n" +
    "C	DCG	Discrete & Computational Geometry	Discrete & Computational Geometry\n" +
    "C	SPL	IEEE Signal Processing Letters	IEEE Signal Process. Lett.\n" +
    "C	IET-IPR	IET Image Processing	IET Image Processing\n" +
    "C	JVCIR	Journal of Visual Communication and Image Representation	J. Visual Communication and Image Representation\n" +
    "C	MS	Multimedia Systems	Multimedia Syst.\n" +
    "C	MTA	Multimedia Tools and Applications	Multimedia Tools Appl.\n" +
    "C		Signal Processing	Signal Processing\n" +
    "C	SPIC	Signal processing : image communication	Sig. Proc.: Image Comm.\n" +
    "C	TVC	The Visual Computer	The Visual Computer\n" +
    "A	ACM MM	ACM International Conference on Multimedia	ACM Multimedia\n" +
    "A	SIGGRAPH	ACM SIGGRAPH Annual Conference	SIGGRAPH\n" +
    "A	VR	IEEE Virtual Reality	VR\n" +
    "A	IEEE VIS	IEEE Visualization Conference	IEEE Trans. Vis. Comput. Graph.\n" +
    "B	ICMR	ACM SIGMM International Conference on Multimedia Retrieval	ICMR\n" +
    "B	SI3D	ACM Symposium on Interactive 3D Graphics	I3D\n" +
    "B	SCA	ACM/Eurographics Symposium on Computer Animation	Symposium on Computer Animation\n" +
    "B	DCC	Data Compression Conference	DCC\n" +
    "B	EG	Eurographics	Eurographics\n" +
    "B	EuroVis	Eurographics Conference on Visualization	EuroVis\n" +
    "B	SGP	Eurographics Symposium on Geometry Processing	Symposium on Geometry Processing\n" +
    "B	EGSR	Eurographics Symposium on Rendering	EGSR\n" +
    "B	ICASSP	IEEE International Conference on Acoustics,Speech and SP	ICASSP\n" +
    "B	ICME	IEEE International Conference on Multimedia& Expo	ICME\n" +
    "B	ISMAR	International Symposium on Mixed and Augmented Reality	ISMAR\n" +
    "B	PG	Pacific Graphics: The Pacific Conference on Computer Graphics and Applications	PG\n" +
    "B	SPM	Symposium on Solid and Physical Modeling	Symposium on Solid and Physical Modeling\n" +
    "C		ACM Symposium on Virtual Reality Software and Technology	VRST\n" +
    "C	CASA	Computer Animation and Social Agents	CASA\n" +
    "C	CGI	Computer Graphics International	CGI\n" +
    "C	INTERSPEECH	Conference of the International SpeechCommunication Association	INTERSPEECH\n" +
    "C	GMP	Geometric Modeling and Processing	GMP\n" +
    "C	PacificVis	IEEE Pacific Visualization Symposium	PacificVis\n" +
    "C	3DV	International Conference on 3D Vision	3DV\n" +
    "C	CAD/Graphics	International Conference on Computer-Aided Design and Computer Graphics	CAD/Graphics\n" +
    "C	ICIP	International Conference on Image Processing	ICIP\n" +
    "C	MMM	International Conference on Multimedia Modeling	MMM\n" +
    "C	PCM	Pacific-Rim Conference on Multimedia	PCM\n" +
    "C	SMI	Shape Modeling International	Shape Modeling International\n" +
    "A	AI	Artificial Intelligence	Artif. Intell.\n" +
    "A	TPAMI	IEEE Trans on Pattern Analysis and Machine Intelligence	IEEE Trans. Pattern Anal. Mach. Intell.\n" +
    "A	IJCV	International Journal of Computer Vision	International Journal of Computer Vision\n" +
    "A	JMLR	Journal of Machine Learning Research	J. Mach. Learn. Res.\n" +
    "B	TAP	ACM Transactions on Applied Perception	TAP\n" +
    "B	TSLP	ACM Transactions on Speech and Language Processing	TSLP\n" +
    "B	AAMAS	Autonomous Agents and Multi-Agent Systems	Autonomous Agents and Multi-Agent Systems\n" +
    "B		Computational Linguistics	Computational Linguistics\n" +
    "B	CVIU	Computer Vision and Image Understanding	Computer Vision and Image Understanding\n" +
    "B	DKE	Data and Knowledge Engineering	Data Knowl. Eng.\n" +
    "B		Evolutionary Computation	Evolutionary Computation\n" +
    "B	TAC	IEEE Transactions on Affective Computing	IEEE Trans. Affective Computing\n" +
    "B	TASLP	IEEE Transactions on Audio, Speech, and Language Processing	IEEE/ACM Trans. Audio, Speech & Language Processing\n" +
    "B		IEEE Transactions on Cybernetics	IEEE Trans. Cybernetics\n" +
    "B	TEC	IEEE Transactions on Evolutionary Computation	IEEE Trans. Evolutionary Computation\n" +
    "B	TFS	IEEE Transactions on Fuzzy Systems	IEEE Trans. Fuzzy Systems\n" +
    "B	TNNLS	IEEE Transactions on Neural Networks and learning systems	IEEE Trans. Neural Netw. Learning Syst.\n" +
    "B	IJAR	International Journal of Approximate Reasoning	Int. J. Approx. Reasoning\n" +
    "B	JAIR	Journal of Artificial Intelligence Research	J. Artif. Intell. Res.\n" +
    "B		Journal of Automated Reasoning	J. Autom. Reasoning\n" +
    "B	JSLHR	Journal of Speech, Language, and Hearing Research	\n" +
    "B		Machine Learning	Machine Learning\n" +
    "B		Neural Computation	Neural Computation\n" +
    "B		Neural Networks	Neural Networks\n" +
    "B		Pattern Recognition	Pattern Recognition\n" +
    "C	TALLIP	ACM Transactions on Asian and Low-Resource Language Information Processing	ACM Trans. Asian & Low-Resource Lang. Inf. Process.\n" +
    "C		Applied Intelligence	Appl. Intell.\n" +
    "C	AIM	Artificial Intelligence in Medicine	Artificial Intelligence in Medicine\n" +
    "C		Artificial Life	Artificial Life\n" +
    "C		Computational Intelligence	Computational Intelligence\n" +
    "C		Computer Speech and Language	Computer Speech & Language\n" +
    "C		Connection Science	Connect. Sci.\n" +
    "C	DSS	Decision Support Systems	Decision Support Systems\n" +
    "C	EAAI	Engineering Applications of Artificial Intelligence	Eng. Appl. of AI\n" +
    "C		Expert Systems	Expert Systems\n" +
    "C	ESWA	Expert Systems with Applications	Expert Syst. Appl.\n" +
    "C		Fuzzy Sets and Systems	Fuzzy Sets and Systems\n" +
    "C	TG	IEEE Transactions on Games	IEEE Trans. Games\n" +
    "C	IET-CVI	IET Computer Vision	IET Computer Vision\n" +
    "C		IET Signal Processing	IET Signal Processing\n" +
    "C	IVC	Image and Vision Computing	Image Vision Comput.\n" +
    "C	IDA	Intelligent Data Analysis	Intell. Data Anal.\n" +
    "C	IJCIA	International Journal of Computational Intelligence and Applications	International Journal of Computational Intelligence and Applications\n" +
    "C	IJIS	International Journal of Intelligent Systems	Int. J. Intell. Syst.\n" +
    "C	IJNS	International Journal of Neural Systems	Int. J. Neural Syst.\n" +
    "C	IJPRAI	International Journal of Pattern Recognition and Artificial Intelligence	IJPRAI\n" +
    "C	IJUFKS	International Journal of Uncertainty, Fuzziness and Knowledge-Based System	International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems\n" +
    "C	IJDAR	International Journal on Document Analysis and Recognition	IJDAR\n" +
    "C	JETAI	Journal of Experimental and Theoretical Artificial Intelligence	J. Exp. Theor. Artif. Intell.\n" +
    "C	KBS	Knowledge-Based Systems	Knowl.-Based Syst.\n" +
    "C		Machine Translation	Machine Translation\n" +
    "C		Machine Vision and Applications	Mach. Vis. Appl.\n" +
    "C		Natural Computing	Natural Computing\n" +
    "C	NLE	Natural Language Engineering	Natural Language Engineering\n" +
    "C	NCA	Neural Computing & Applications	Neural Computing and Applications\n" +
    "C	NPL	Neural Processing Letters	Neural Processing Letters\n" +
    "C		Neurocomputing	Neurocomputing\n" +
    "C	PAA	Pattern Analysis and Applications	Pattern Anal. Appl.\n" +
    "C	PRL	Pattern Recognition Letters	Pattern Recognition Letters\n" +
    "C		Soft Computing	Soft Comput.\n" +
    "C	WI	Web Intelligence	Web Intelligence\n" +
    "A	AAAI	AAAI Conference on Artificial Intelligence	AAAI\n" +
    "A	NeurIPS	Annual Conference on Neural Information Processing Systems	NeurIPS\n" +
    "A	ACL	Annual Meeting of the Association for Computational Linguistics	ACL\n" +
    "A	CVPR	IEEE Conference on Computer Vision and Pattern Recognition	CVPR\n" +
    "A	ICCV	International Conference on Computer Vision	ICCV\n" +
    "A	ICML	International Conference on Machine Learning	ICML\n" +
    "A	IJCAI	International Joint Conference on Artificial Intelligence	IJCAI\n" +
    "B	COLT	Annual Conference on Computational Learning Theory	COLT\n" +
    "B	EMNLP	Conference on Empirical Methods in Natural Language Processing	EMNLP\n" +
    "B	ECAI	European Conference on Artificial Intelligence	ECAI\n" +
    "B	ECCV	European Conference on Computer Vision	ECCV\n" +
    "B	ICRA	IEEE International Conference on Robotics and Automation	ICRA\n" +
    "B	ICAPS	International Conference on Automated Planning and Scheduling	ICAPS\n" +
    "B	ICCBR	International Conference on Case-Based Reasoning and Development	ICCBR\n" +
    "B	COLING	International Conference on Computational Linguistics	COLING\n" +
    "B	KR	International Conference on Principles of Knowledge Representation and Reasoning	KR\n" +
    "B	UAI	International Conference on Uncertainty in Artificial Intelligence	UAI\n" +
    "B	AAMAS	International Joint Conference on Autonomous Agents and Multi-agent Systems	AAMAS\n" +
    "B	PPSN	Parallel Problem Solving from Nature	PPSN\n" +
    "C	AISTATS	Artificial Intelligence and Statistics	AISTATS\n" +
    "C	ACCV	Asian Conference on Computer Vision	ACCV\n" +
    "C	ACML	Asian Conference on Machine Learning	ACML\n" +
    "C	BMVC	British Machine Vision Conference	BMVC\n" +
    "C	NLPCC	CCF International Conference on Natural Language Processing and Chinese Computing	NLPCC\n" +
    "C	CoNLL	Conference on Computational Natural Language Learning	CoNLL\n" +
    "C	GECCO	Genetic and Evolutionary Computation Conference	GECCO\n" +
    "C	ICTAI	IEEE International Conference on Tools with Artificial Intelligence	ICTAI\n" +
    "C	IROS	IEEE\RSJ International Conference on Intelligent Robots and Systems	IROS\n" +
    "C	ALT	International Conference on Algorithmic Learning Theory	ALT\n" +
    "C	ICANN	International Conference on Artificial Neural Networks	ICANN\n" +
    "C	FG	International Conference on Automatic Face and Gesture Recognition	FG\n" +
    "C	ICDAR	International Conference on Document Analysis and Recognition	ICDAR\n" +
    "C	ILP	International Conference on Inductive Logic Programming	ILP\n" +
    "C	KSEM	International conference on Knowledge Science,Engineering and Management	KSEM\n" +
    "C	ICONIP	International Conference on Neural Information Processing	ICONIP\n" +
    "C	ICPR	International Conference on Pattern Recognition	ICPR\n" +
    "C	ICB	International Joint Conference on Biometrics	ICB\n" +
    "C	IJCNN	International Joint Conference on Neural Networks	IJCNN\n" +
    "C	PRICAI	Pacific Rim International Conference on Artificial Intelligence	PRICAI\n" +
    "C	NAACL	The Annual Conference of the North American Chapter of the Association for Computational Linguistics	NAACL\n" +
    "A	TOCHI	ACM Transactions on Computer-Human Interaction	ACM Trans. Comput.-Hum. Interact.\n" +
    "A	IJHCS	International Journal of Human Computer Studies	Int. J. Hum.-Comput. Stud.\n" +
    "B	CSCW	Computer Supported Cooperative Work	Computer Supported Cooperative Work\n" +
    "B	HCI	Human Computer Interaction	Human-Computer Interaction\n" +
    "B		IEEE Transactions on Human-Machine Systems	IEEE Trans. Human-Machine Systems\n" +
    "B	IWC	Interacting with Computers	Interacting with Computers\n" +
    "B	IJHCI	International Journal of Human-Computer Interaction	Int. J. Hum. Comput. Interaction\n" +
    "B	UMUAI	User Modeling and User-Adapted Interaction	User Model. User-Adapt. Interact.\n" +
    "C	BIT	Behaviour & Information Technology	Behaviour & IT\n" +
    "C	PUC	Personal and Ubiquitous Computing	Personal and Ubiquitous Computing\n" +
    "C	PMC	Pervasive and Mobile Computing	Pervasive and Mobile Computing\n" +
    "A	CSCW	ACM Conference on Computer Supported Cooperative Work and Social Computing	CSCW\n" +
    "A	CHI	ACM Conference on Human Factors in Computing Systems	CHI\n" +
    "A	UbiComp	ACM International Conference on Ubiquitous Computing	UbiComp\n" +
    "B	GROUP	ACM Conference on Supporting Group Work	GROUP\n" +
    "B	IUI	ACM International Conference on Intelligent User Interfaces	IUI\n" +
    "B	ITS	ACM International Conference on Interactive Tabletops and Surfaces	ISS\n" +
    "B	UIST	ACM Symposium on User Interface Software and Technology	UIST\n" +
    "B	ECSCW	European Conference on Computer Supported Cooperative Work	ECSCW\n" +
    "B	PERCOM	IEEE International Conference on Pervasive Computing and Communications	PerCom\n" +
    "B	MobileHCI	International Conference on Human Computer Interaction with Mobile Devices and Services	MobileHCI\n" +
    "C	DIS	ACM Conference on Designing Interactive Systems	Conference on Designing Interactive Systems\n" +
    "C	ICMI	ACM International Conference on Multimodal Interaction	ICMI\n" +
    "C	ASSETS	ACM SIGACCESS Conference on Computers and Accessibility	ASSETS\n" +
    "C	GI	Graphics Interface conference	Graphics Interface\n" +
    "C	UIC	IEEE International Conference on Ubiquitous Intelligence and Computing	UIC\n" +
    "C		IEEE World Haptics Conference	HAPTICS\n" +
    "C	INTERACT	IFIP TC13 Conference on Human-Computer Interaction	INTERACT\n" +
    "C	IDC	Interaction Design and Children	IDC\n" +
    "C	CollaborateCom	International Conference on Collaborative Computing: Networking, Applications and Worksharing	CollaborateCom\n" +
    "C	CSCWD	International Conference on Computer Supported Cooperative Work in Design	CSCWD\n" +
    "C	CoopIS	International Conference on Cooperative Information Systems	CoopIS\n" +
    "C	MobiQuitous	International Conference on Mobile and Ubiquitous Systems: Computing,Networking and Services	MobiQuitous\n" +
    "C	AVI	International Working Conference on Advanced Visual Interfaces	AVI\n" +
    "A 	JACM	Journal of the ACM	J. ACM\n" +
    "A 	Proc. IEEE	Proceedings of the IEEE	Proceedings of the IEEE\n" +
    "B		Bioinformatics	Bioinformatics\n" +
    "B		Briefings in Bioinformatics	Briefings in Bioinformatics\n" +
    "B	Cognition	Cognition: International Journal of Cognitive Science	\n" +
    "B	TASAE	IEEE Transactions on Automation Science and Engineering	IEEE Trans. Automation Science and Engineering\n" +
    "B	TGARS	IEEE Transactions on Geoscience and Remote Sensing	IEEE Trans. Geoscience and Remote Sensing\n" +
    "B	TITS	IEEE Transactions on Intelligent Transportation Systems	IEEE Trans. Intelligent Transportation Systems\n" +
    "B	TMI	IEEE Transactions on Medical Imaging	IEEE Trans. Med. Imaging\n" +
    "B	TR	IEEE Transactions on Robotics	IEEE Trans. Robotics\n" +
    "B	TCBB	IEEE-ACM Transactions on Computational Biology and Bioinformatics	IEEE/ACM Trans. Comput. Biology Bioinform.\n" +
    "B	JCST	Journal of Computer Science and Technology	J. Comput. Sci. Technol.\n" +
    "B	JAMIA	Journal of the American Medical Informatics Association	JAMIA\n" +
    "B		PLOS Computational Biology	PLoS Computational Biology\n" +
    "B		Science China Information Sciences	SCIENCE CHINA Information Sciences\n" +
    "B		The Computer Journal	Comput. J.\n" +
    "B		World Wide Web Journal	World Wide Web Journal\n" +
    "C		BMC Bioinformatics	BMC Bioinformatics\n" +
    "C		Cybernetics and Systems	Cybernetics and Systems\n" +
    "C	FCS	Frontiers of Computer Science	Frontiers Comput. Sci.\n" +
    "C		IEEE Geoscience and Remote Sensing Letters	IEEE Geosci. Remote Sensing Lett.\n" +
    "C	JBHI	IEEE Journal of Biomedical and Health Informatics	IEEE J. Biomedical and Health Informatics\n" +
    "C	TBD	IEEE Transactions on Big Data	IEEE Trans. Big Data\n" +
    "C		IET Intelligent Transport Systems	\n" +
    "C	JBI	Journal of Biomedical Informatics	Journal of Biomedical Informatics\n" +
    "C		Medical Image Analysis	Medical Image Analysis\n" +
    "A	WWW	International World Wide Web Conferences	WWW\n" +
    "A	RTSS	Real-Time Systems Symposium	RTSS\n" +
    "B	CogSci	Cognitive Science Society Annual Conference	CogSci\n" +
    "B	BIBM	IEEE International Conference on Bioinformatics and Biomedicine	BIBM\n" +
    "B	EMSOFT	International Conference on Embedded Software	EMSOFT\n" +
    "B	ISMB	International conference on Intelligent Systems for Molecular Biology	ISMB\n" +
    "B	RECOMB	International Conference on Research in Computational Molecular Biology	RECOMB\n" +
    "C	AMIA	American Medical Informatics Association Annual Symposium	AMIA\n" +
    "C	APBC	Asia Pacific Bioinformatics Conference	APBC\n" +
    "C		IEEE International Conference on Big Data	BigData\n" +
    "C		IEEE International Conference on Cloud Computing	CLOUD\n" +
    "C	SMC	IEEE International Conference on Systems, Man, and Cybernetics	SMC\n" +
    "C	COSIT	International Conference on Spatial Information Theory	COSIT\n" +
    "C	ISBRA	International Symposium on Bioinformatics Research and Applications	The Cluster Affinity Distance for Phylogenies";

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
