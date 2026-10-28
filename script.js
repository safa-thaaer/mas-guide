/* Dalil MAS: bilingual study guide to OWASP MAS. Content: OWASP MAS project, CC BY-SA 4.0. */
/* Quiz bank: first option is always the correct one; options are shuffled at render time. */
var QUIZ_AR = {
overview: [
  {q:"ما السؤال الذي يجيب عنه MASVS؟", o:["ما المتطلبات الأمنية التي يجب أن يحققها التطبيق","كيف نخترق التطبيق خطوة بخطوة","ما الأدوات اللازمة لاختبار التطبيق","كيف ننشر التطبيق في المتجر"], w:"MASVS معيار يحدد الضوابط (المتطلبات). أما خطوات الفحص والأدوات ففي MASTG."},
  {q:"ما الترتيب الصحيح لسلسلة التتبّع في مشروع MAS؟", o:["ضابط MASVS ثم نقطة ضعف MASWE ثم اختبار MASTG ثم Demo","اختبار MASTG ثم ضابط MASVS ثم MASWE ثم Demo","MASWE ثم Demo ثم MASVS ثم MASTG","Demo ثم MASTG ثم MASWE ثم MASVS"], w:"نبدأ من الضابط العام، ثم نقطة الضعف المحددة، ثم الاختبار على منصة معينة، ثم المثال العملي الذي يعمل."},
  {q:"قائمة نقاط الضعف MASWE مستوحاة من أي قائمة عالمية؟", o:["CWE","CVE","OWASP Top 10","ISO 27001"], w:"MASWE مكمّل لقائمة Common Weakness Enumeration ومتخصص في الموبايل. أما CVE فهي ثغرات محددة في منتجات بعينها."},
  {q:"ماذا حدث لملف MAS Checklist مع صدور MASTG v2؟", o:["لم يعد يُنشر كملف رسمي، وأصبح الموقع والمستودعات هي المصدر","أصبح إلزامياً لكل تطبيق","تحوّل إلى تطبيق موبايل","دُمج داخل MASVS كضوابط جديدة"], w:"أوقف المشروع نسخة PDF وجدول Checklist لأن البيانات أصبحت منظمة ومترابطة في الموقع والمستودعات، ويمكن بناء أي جدول منها."},
  {q:"ما الهدف من MAS Crackmes؟", o:["تحديات تدريبية على الهندسة العكسية","أداة لفحص الثغرات آلياً","شهادة رسمية من OWASP","مكتبة تشفير للمطوّرين"], w:"هي تطبيقات UnCrackable تتدرب عليها، وتُستخدم أيضاً كأمثلة داخل MASTG."},
  {q:"كم عدد الضوابط في MASVS v2؟", o:["24 ضابطاً","8 ضوابط","78 ضابطاً","285 ضابطاً"], w:"24 ضابطاً موزعة على 8 مجموعات. الرقم 78 هو عدد نقاط الضعف، و285 عدد الاختبارات."}
],
masvs: [
  {q:"كم مجموعة وكم ضابطاً في MASVS v2.1.0؟", o:["8 مجموعات و24 ضابطاً","7 مجموعات و20 ضابطاً","10 مجموعات و78 ضابطاً","8 مجموعات و285 ضابطاً"], w:"ثماني مجموعات من STORAGE إلى PRIVACY، و24 ضابطاً إجمالاً. مجموعة PRIVACY أُضيفت في v2.1.0."},
  {q:"ماذا يعني المعرّف MASVS-NETWORK-2؟", o:["الضابط الثاني في مجموعة الشبكة (تثبيت الهوية)","المستوى الثاني من الحماية","الإصدار الثاني من المعيار","نقطة الضعف رقم 2"], w:"الصيغة MASVS-المجموعة-رقم الضابط. الرقم ترتيب داخل المجموعة وليس مستوى صعوبة."},
  {q:"هل تمنح OWASP شهادة رسمية لتطبيق يحقق MASVS؟", o:["لا، OWASP لا تعتمد ولا تمنح أي شهادات","نعم، بعد اختبار آلي","نعم، للتطبيقات البنكية فقط","نعم، عبر متجر Google Play"], w:"OWASP منظمة محايدة لا تعتمد جهات أو تطبيقات. أي شهادة تحمل اسم MASVS ليست رسمية من OWASP."},
  {q:"أي معيار يُستخدم لتقييم الخادم (Backend) الذي يتصل به التطبيق؟", o:["OWASP ASVS","MASVS-NETWORK","MASWE","MAS Crackmes"], w:"MASVS يغطي جهة العميل فقط. الخادم يُقيَّم بمعيار ASVS ويُختبر بدليل WSTG."},
  {q:"ما الطريقة الموصى بها للتحقق من التزام التطبيق بالمعيار؟", o:["مراجعة \"الكتاب المفتوح\" مع وصول للكود والتوثيق والمطوّرين","تشغيل أداة فحص آلية واحدة فقط","قراءة وصف التطبيق في المتجر","سؤال المستخدمين عن تجربتهم"], w:"المراجعة المفتوحة تعطي المختبِر وصولاً للكود والتوثيق وحسابات لكل دور. والأدوات الآلية وحدها لا تكفي."},
  {q:"أي مجموعة تهتم بالبيانات أثناء انتقالها (data-in-transit)؟", o:["MASVS-NETWORK","MASVS-STORAGE","MASVS-CODE","MASVS-PRIVACY"], w:"NETWORK للبيانات المنقولة، بينما STORAGE للبيانات المخزّنة على الجهاز (data-at-rest)."}
],
profiles: [
  {q:"في ملف MAS-L1، من يُعتبر المهاجم؟", o:["التطبيقات الأخرى المثبّتة على الجهاز","مستخدم الجهاز نفسه","نظام التشغيل","مطوّر التطبيق"], w:"L1 يفترض أن النظام موثوق والمستخدم ليس عدواً، والخطر من التطبيقات الأخرى."},
  {q:"أي ملف يفترض أن مستخدم الجهاز قد يكون المهاجم (مهندس عكسي أو غشّاش)؟", o:["MAS-R","MAS-L1","MAS-P","MAS-L2"], w:"MAS-R للصمود أمام الهندسة العكسية والتلاعب، حيث صاحب الجهاز نفسه قد يحاول الغش أو سرقة المنطق."},
  {q:"تطبيق بنكي يحوّل الأموال ويحتوي منطقاً تجارياً مهماً. ما التركيبة الأنسب؟", o:["L2 + P + R","L1 فقط","P فقط","R فقط"], w:"بيانات عالية الخطورة ووظائف حساسة (L2)، وبيانات شخصية (P)، وأصول تجارية تحتاج حماية من التلاعب (R)."},
  {q:"ما الصحيح عن ملف MAS-R؟", o:["يكمّل L1 وL2 ولا يُستخدم بديلاً عنهما","يغني عن كل الضوابط الأخرى","يضمن حماية بنسبة 100%","مخصص لتطبيقات الأخبار"], w:"R طبقة دفاع إضافية فوق الضوابط الأساسية، ولا تضمن نجاحاً كاملاً لأن المهاجم يملك الجهاز."},
  {q:"ماذا يفترض ملف MAS-L2 إضافة إلى L1؟", o:["أن النظام قد يكون مخترقاً (root أو jailbreak) وأن طرفاً ثالثاً قد يصل للجهاز","أن المستخدم هو العدو الوحيد","أنه لا يوجد أي تهديد على الشبكة","أن التطبيق لا يتصل بالإنترنت"], w:"L2 لا يثق بضوابط نظام التشغيل، ويعتبر من يملك وصولاً فعلياً للجهاز مهاجماً محتملاً."},
  {q:"ما هو ملف MAS-EUDIW؟", o:["ملف متخصص لمحفظة الهوية الرقمية الأوروبية","أداة لكسر حماية iOS","إصدار جديد من MASVS","قائمة ثغرات خاصة بالألعاب"], w:"ملف متخصص يحوّل المتطلبات التنظيمية الأوروبية لمحافظ الهوية الرقمية إلى متطلبات قابلة للاختبار ومربوطة بـ MASWE."}
],
maswe: [
  {q:"ما دور MASWE في إطار MAS؟", o:["الجسر بين ضوابط MASVS العامة واختبارات MASTG المحددة","بديل كامل عن MASVS","أداة لفك تشفير التطبيقات","قائمة بالتطبيقات المصابة في المتاجر"], w:"MASWE يحدد الخطأ الفعلي الذي يكسر الضابط، ويشير إلى الاختبارات التي تكشفه."},
  {q:"أي قسم في صفحة نقطة الضعف يصف الأسباب التي يُدخلها المطوّر؟", o:["Modes of Introduction","Impact","Mitigations","References"], w:"طرق الظهور تحوي الأسباب القابلة للاختبار فقط. أما Impact فللعواقب، وMitigations للحلول."},
  {q:"كم نقطة ضعف في MASWE v1.0.0؟", o:["78","24","119","285"], w:"78 نقطة. الرقم 119 كان عدد عناصر النسخة التجريبية قبل الدمج."},
  {q:"عبارة \"The app excludes sensitive data from application logs\" هي مثال على ماذا؟", o:["جملة المتطلب (requirement) لنقطة الضعف MASWE-0005","اسم أداة فحص","نتيجة اختبار ديناميكي","ملف اختبار L2"], w:"لكل نقطة ضعف جملة متطلب إيجابية هي عكسها، تصلح للعقود والسياسات."},
  {q:"لماذا نتيجة مثل \"فشل في MASWE-0005 بسبب السجلات المفصّلة في الإنتاج\" أفضل من \"فشل في MASVS-STORAGE-2\"؟", o:["لأنها محددة ويمكن إصلاحها مباشرة","لأنها أقصر","لأن MASVS قديم ولم يعد يُستخدم","لأن MASWE يمنح شهادة رسمية"], w:"الضابط عام جداً، أما نقطة الضعف مع طريقة ظهورها فتخبر المطوّر بالضبط ما الذي يجب تغييره."},
  {q:"حسب القاعدة الذهبية، كل \"معالجة\" (Mitigation) في MASWE يجب أن يقابلها:", o:["أفضل ممارسة MASTG-BEST","أداة MASTG-TOOL","تطبيق MASTG-APP","ضابط جديد في MASVS"], w:"المعالجة تعليمات للمطوّر، وهذا بالضبط ما تقدمه MASTG-BEST. أما كل طريقة ظهور فيقابلها اختبار MASTG-TEST."}
],
mastg: [
  {q:"ما الأقسام الأربعة لاختبار MASTG v2؟", o:["Overview ثم Steps ثم Observation ثم Evaluation","Intro ثم Body ثم Conclusion ثم References","Static ثم Dynamic ثم Manual ثم Hooks","Android ثم iOS ثم Web ثم Desktop"], w:"البنية الثابتة: ماذا نفحص، الخطوات، المخرجات الخام، ثم قرار النجاح أو الفشل."},
  {q:"ماذا يحتوي MASTG-DEMO؟", o:["تطبيق عيّنة فيه الثغرة، وسكربت، ومخرجات متوقعة، وتقييم","شرحاً نظرياً فقط","قائمة مصطلحات","فيديو تعليمياً"], w:"كل Demo يمكن تشغيله على جهازك، ويُبنى ويُختبر آلياً مع كل تحديث."},
  {q:"ما الفرق بين قسمي Observation وEvaluation؟", o:["Observation للمخرجات الخام، وEvaluation لتحديد النجاح أو الفشل","لا فرق بينهما","Observation للنجاح وEvaluation للفشل","Observation للمطوّر وEvaluation للمستخدم"], w:"نسجّل ما ظهر أولاً دون تفسير، ثم نطبّق معيار الحكم في Evaluation."},
  {q:"أي مكوّن في MASTG يخبر المطوّر كيف يبني الحل الصحيح؟", o:["MASTG-BEST","MASTG-TOOL","MASTG-APP","MASTG-TECH"], w:"Best Practices للحلول. أما TECH فطرق عمل للمختبِر، وTOOL أدوات، وAPP تطبيقات تدريبية."},
  {q:"لماذا قُسّمت اختبارات v1 الطويلة إلى اختبارات ذرّية في v2؟", o:["لتسهيل الأتمتة والإحالة وتحديد النجاح والفشل بوضوح","لتقليل عدد الاختبارات","لأن Android توقف عن دعمها","لإخفائها عن المهاجمين"], w:"الفصل الطويل يمزج عدة فحوص ولا يمكن أن يفشل بوضوح. الاختبار الذرّي يفحص شيئاً واحداً فقط."},
  {q:"ما الذي تقدّمه مكوّنات MASTG-TECH؟", o:["طرق عمل قابلة لإعادة الاستخدام تستدعيها الاختبارات، مثل تفكيك تطبيق","ضوابط أمنية جديدة","قوائم بأسماء المطوّرين","تطبيقات للبيع في المتجر"], w:"بدلاً من تكرار الشرح في كل اختبار، يشير الاختبار إلى تقنية مثل MASTG-TECH-0013."}
],
taxonomy: [
  {q:"تطبيق مكتوب بـ Kotlin ويعمل على Android فقط هو تطبيق:", o:["أصلي (Native)","هجين (Hybrid)","تطبيق ويب تقدمي (PWA)","تطبيق ويب"], w:"Kotlin وJava لغتا Android الرسميتان، وSwift وObjective-C لـ iOS."},
  {q:"ما الذي يميّز التطبيق الهجين؟", o:["يعرض محتوى ويب داخل WebView مع جسر للوصول إلى ميزات الجهاز","يُكتب بلغة C فقط","لا يحتاج نظام تشغيل","يعمل على الحاسوب فقط"], w:"أطر مثل Cordova وIonic تغلّف واجهة ويب داخل تطبيق أصلي."},
  {q:"أي مما يلي إطار متعدد المنصات؟", o:["Flutter","Swift","Logcat","Keychain"], w:"Flutter يكتب كوداً واحداً بلغة Dart لعدة منصات. Swift لغة iOS، وLogcat سجلات Android، وKeychain مخزن iOS."},
  {q:"ما التقنية التي تسمح لتطبيق PWA بالعمل دون اتصال؟", o:["Service Workers","Android Keystore","Intents","Secure Enclave"], w:"Service Worker سكربت يعمل في الخلفية ويخزّن الموارد للعمل دون إنترنت."},
  {q:"هل تختلف ضوابط MASVS حسب نوع التطبيق؟", o:["لا، الضوابط نفسها تنطبق، لكن طريقة الاختبار قد تختلف","نعم، لكل نوع معيار مختلف","MASVS للتطبيقات الأصلية فقط","MASVS لتطبيقات الويب فقط"], w:"المعيار لا يهتم بطريقة البناء، لكن الأدوات والمواضع التي تبحث فيها تتغير."},
  {q:"ما أخطر سيناريو في التطبيق الهجين؟", o:["ثغرة XSS في الصفحة تستدعي وظائف حساسة عبر الجسر الأصلي","أن يكون حجم التطبيق كبيراً","أن تكون الألوان غير متناسقة","أن يعمل على Android وiOS معاً"], w:"إذا كان الجسر يكشف وظائف مثل قراءة الملفات، فإن JavaScript محقوناً في الصفحة يستطيع استخدامها."}
],
testing: [
  {q:"أي نوع اختبار هو الأكثر شيوعاً، ويُعطى فيه المختبِر بعض المعلومات (عادةً بيانات الدخول)؟", o:["الصندوق الرمادي Gray-box","الصندوق الأسود Black-box","الصندوق الأبيض White-box","الصندوق الأحمر Red-box"], w:"Gray-box حل وسط بين الكلفة والسرعة والعمق، ولذلك هو الأشيع."},
  {q:"ما الفرق بين التحليل الساكن والديناميكي؟", o:["الساكن دون تشغيل التطبيق، والديناميكي أثناء تشغيله","الساكن لـ iOS والديناميكي لـ Android","الساكن يدوي دائماً والديناميكي آلي دائماً","لا يوجد فرق"], w:"كلاهما قد يكون يدوياً أو آلياً، والفرق في تشغيل التطبيق من عدمه."},
  {q:"أداة فحص أبلغت عن ثغرة CSRF في تطبيق موبايل. ما الموقف الصحيح؟", o:["تقييم سيناريو الاستغلال الفعلي، فقد تكون إيجابية كاذبة","اعتبارها ثغرة حرجة فوراً","حذف التطبيق","تجاهل كل نتائج الأداة"], w:"CSRF يحتاج أن يضيف المتصفح كوكيز الجلسة تلقائياً، والروابط في الموبايل تفتح في متصفح بمخزن كوكيز منفصل."},
  {q:"ما أول مرحلة في اختبار الاختراق؟", o:["التحضير: تحديد النطاق والحصول على تصريح مكتوب","الاستغلال","كتابة التقرير","رسم خريطة التطبيق"], w:"المراحل: التحضير، جمع المعلومات، رسم الخريطة، الاستغلال، التقرير."},
  {q:"تطبيق يرمّز كلمة المرور بـ Base64 قبل تخزينها. هل هي محمية؟", o:["لا، Base64 ترميز يُعكس بسهولة وليس تشفيراً","نعم، مشفّرة بقوة","نعم، مجزّأة بهاش آمن","نعم، لأنها في Keystore"], w:"الترميز لتغيير شكل البيانات فقط، وأي شخص يستطيع فكّه دون مفتاح."},
  {q:"ماذا تعني \"البيانات قيد الاستخدام\" (In use)؟", o:["بيانات محمّلة في ذاكرة التطبيق","بيانات في قاعدة بيانات","بيانات تُرسل إلى الخادم","بيانات محذوفة"], w:"الحالات الثلاث: مخزّنة (at rest)، وقيد الاستخدام في الذاكرة (in use)، ومنقولة (in transit)."}
],
reversing: [
  {q:"ما هدف الهندسة العكسية في اختبار التطبيقات؟", o:["فهم كود التطبيق المُترجَم","سرقة حسابات المستخدمين","تسريع التطبيق","نشر التطبيق في المتجر"], w:"الهندسة العكسية تحليل للفهم. أما تغيير السلوك فهو التلاعب (Tampering)."},
  {q:"تعديل سلوك التطبيق لتعطيل كشف الروت يُسمّى:", o:["تلاعب (Tampering)","تسجيل (Logging)","تثبيت هوية (Pinning)","ترميز (Encoding)"], w:"التلاعب هو تعديل التطبيق أو العملية الجارية أو بيئتها لتغيير السلوك."},
  {q:"Frida مثال على:", o:["أداة Dynamic Binary Instrumentation لحقن سكربتات وقت التشغيل","مكتبة تشفير","متجر تطبيقات بديل","معيار أمني"], w:"Frida تحقن JavaScript في العملية الجارية لاعتراض الدوال وتعديلها (hooking)."},
  {q:"ماذا تعني عبارة MASTG: \"المهندس العكسي يفوز دائماً\"؟", o:["الحمايات ترفع الجهد المطلوب لكنها لا تمنع الهجوم نهائياً","لا داعي لأي حماية","الهندسة العكسية غير قانونية دائماً","لا يمكن تحليل تطبيقات iOS"], w:"المهاجم يملك الجهاز، فسينجح في النهاية إن امتلك الوقت. الحمايات تجعل ذلك مكلفاً."},
  {q:"لماذا يحتاج المختبِر إلى تعطيل SSL Pinning في اختبار الصندوق الأسود؟", o:["ليستطيع اعتراض الترافيك وفحصه عبر بروكسي","لتسريع الشبكة","لحذف التطبيق","لتشفير البيانات"], w:"Pinning يمنع البروكسي من قراءة الترافيك، فيجب تجاوزه لإكمال فحص الشبكة والخادم."},
  {q:"ما التقنية التي تحلّل مسارات الكود رياضياً لإيجاد مدخل يوصل لنتيجة معينة؟", o:["Symbolic Execution","Binary Patching","Obfuscation","Repackaging"], w:"التنفيذ الرمزي، بأدوات مثل angr، يحسب المدخلات اللازمة دون تجربتها واحداً واحداً."}
],
android: [
  {q:"كيف يعزل Android التطبيقات عن بعضها؟", o:["يمنح كل تطبيق مستخدم Linux مستقلاً (UID) ومجلد بيانات خاصاً","يشغّل كل التطبيقات بالمستخدم نفسه","يمنع التطبيقات من استخدام الإنترنت","يحذف بيانات التطبيقات عند إغلاقها"], w:"صندوق الرمل مبني على نظام المستخدمين في Linux، مع SELinux والأذونات."},
  {q:"أي ملف يصرّح بالأذونات والمكوّنات وخيارات مثل allowBackup؟", o:["AndroidManifest.xml","classes.dex","resources.arsc","Info.plist"], w:"الـ Manifest هو هوية التطبيق. أما Info.plist فهو المقابل في iOS."},
  {q:"أي مما يلي ليس من المكوّنات الأربعة الرئيسية لتطبيق Android؟", o:["Keychain","Activity","Service","Content Provider"], w:"Keychain مخزن أسرار في iOS. المكوّنات الأربعة: Activities وServices وBroadcast Receivers وContent Providers."},
  {q:"ما الذي أضافه مخطط توقيع APK الإصدار v3؟", o:["دعم تدوير مفتاح التوقيع (key rotation)","تشفير قاعدة البيانات","إلغاء الحاجة للتوقيع","التثبيت عبر Bluetooth"], w:"v2 يحمي الملف كاملاً، وv3 يدعم تدوير المفاتيح، وv4 التثبيت التدريجي."},
  {q:"ما وظيفة Zygote في Android؟", o:["عملية أم تُنسخ منها عمليات التطبيقات لتسريع تشغيلها","أداة لاعتراض الشبكة","مخزن مفاتيح","متجر تطبيقات بديل"], w:"Zygote تحمّل المكتبات المشتركة مسبقاً، ثم تُنسخ (fork) لكل تطبيق جديد."},
  {q:"لماذا يحتاج المختبِر غالباً إلى جهاز بصلاحيات root؟", o:["للوصول لمجلدات بيانات التطبيق وتشغيل أدوات مثل frida-server","لأن التطبيقات لا تعمل بدونه","لزيادة سرعة الجهاز","لأن Google تشترط ذلك"], w:"root يتيح فحص /data/data وتثبيت شهادة البروكسي في مخزن النظام وتشغيل الأدوات."}
],
ios: [
  {q:"ما وظيفة Secure Enclave؟", o:["معالج أمان منفصل يحمي المفاتيح وبيانات البصمة والوجه","متجر تطبيقات","أداة لتصحيح الأخطاء","مجلد لحفظ الصور"], w:"Secure Enclave معزول عن المعالج الرئيسي، ولا يكشف أسراره حتى لنظام التشغيل."},
  {q:"أي فئة حماية تجعل الملف غير قابل للقراءة إلا والجهاز مفتوح؟", o:["NSFileProtectionComplete","NSFileProtectionNone","CompleteUntilFirstUserAuthentication","FairPlay"], w:"Complete هي الأقوى. والفئة الافتراضية CompleteUntilFirstUserAuthentication تبقى متاحة بعد أول فتح."},
  {q:"لماذا يجب فك تشفير تطبيقات App Store قبل تحليلها ساكناً؟", o:["لأنها مشفّرة بنظام FairPlay","لأنها مضغوطة بكلمة مرور المستخدم","لأنها مكتوبة بلغة Java","لأن Apple تحذف الكود منها"], w:"FairPlay يشفّر الملف التنفيذي، فيُفك عادةً من جهاز بجيلبريك بأدوات مثل frida-ios-dump."},
  {q:"أين تُكتب رسائل طلب الأذونات (مثل الكاميرا) في تطبيق iOS؟", o:["Info.plist","AndroidManifest.xml","Keychain","Logcat"], w:"مفاتيح مثل NSCameraUsageDescription تُكتب في Info.plist ويراها المستخدم عند الطلب."},
  {q:"ما فائدة App Attest؟", o:["تمكين الخادم من التحقق أن الطلب صادر عن نسخة أصلية من التطبيق","تسريع التطبيق","تجاوز الجيلبريك","نسخ البيانات احتياطياً"], w:"App Attest ضمن DeviceCheck، ويساعد الخادم على رفض النسخ المعدّلة والأجهزة المزيفة."},
  {q:"أي نوع جيلبريك يبقى فعّالاً تلقائياً بعد إعادة التشغيل؟", o:["Untethered","Tethered","Semi-tethered","Semi-untethered"], w:"Untethered لا يحتاج حاسوباً ولا إعادة تفعيل. Tethered يحتاج حاسوباً عند كل إقلاع."}
],
storage: [
  {q:"أين يجب تخزين مفاتيح التشفير على Android؟", o:["Android Keystore","SharedPreferences","التخزين الخارجي","ملف نصي داخل assets"], w:"Keystore مدعوم بالعتاد (TEE أو StrongBox)، والمفتاح لا يغادره."},
  {q:"ما الذي يغطيه الضابط MASVS-STORAGE-2؟", o:["التسرّب غير المقصود مثل السجلات والنسخ الاحتياطي","اختيار خوارزمية التشفير","التحقق من شهادة الخادم","تسجيل الدخول بالبصمة"], w:"STORAGE-1 للتخزين المقصود، وSTORAGE-2 للتسرّب الجانبي الذي يستطيع المطوّر منعه."},
  {q:"توكن جلسة مخزّن نصاً واضحاً في UserDefaults. ما المشكلة؟", o:["UserDefaults لا يوفر حماية غير صندوق الرمل، ومكان التوكن Keychain","لا مشكلة، فنظام iOS آمن","المشكلة أن UserDefaults بطيء","المشكلة أن التوكن قصير"], w:"يمكن قراءة UserDefaults من جهاز بجيلبريك أو من نسخة احتياطية."},
  {q:"أي خاصية وصول في Keychain هي الأضعف ويجب تجنّبها؟", o:["kSecAttrAccessibleAlways","kSecAttrAccessibleWhenUnlockedThisDeviceOnly","kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly","kSecAttrAccessibleWhenUnlocked"], w:"Always تجعل العنصر متاحاً حتى والجهاز مقفل، وهي مهملة. استخدم أشد خاصية تناسب حاجتك."},
  {q:"لماذا يُعد التخزين الخارجي في Android خطراً على البيانات الحساسة؟", o:["لأن تطبيقات أخرى والمستخدم قد يصلون إليه","لأنه أبطأ","لأنه يُحذف تلقائياً","لأنه مشفّر بمفتاح ضعيف"], w:"التخزين الخارجي مشترك وخارج صندوق رمل التطبيق، وهذا ما تفحصه اختبارات مثل MASTG-TEST-0200."},
  {q:"كيف تمنع لوحة المفاتيح من حفظ ما يُكتب في حقل حساس على Android؟", o:["باستخدام inputType مثل textNoSuggestions أو textPassword","بتفعيل allowBackup","باستخدام Log.d","بتعطيل الإنترنت"], w:"هذه الأنواع تمنع الاقتراحات والتخزين المؤقت لما يكتبه المستخدم."}
],
crypto: [
  {q:"أي خوارزمية موصى بها لتشفير البيانات (السرية)؟", o:["AES-GCM-256","DES","RC4","MD5"], w:"AES-GCM-256 أو ChaCha20-Poly1305. أما DES وRC4 فضعيفة، وMD5 دالة هاش وليست تشفيراً."},
  {q:"لماذا لا يُستخدم java.util.Random لتوليد مفاتيح أو توكنات؟", o:["لأن قيمه قابلة للتنبؤ، والبديل SecureRandom","لأنه بطيء جداً","لأنه لا يعمل على Android","لأنه يولّد أرقاماً سالبة فقط"], w:"هذا بالضبط ما يوضحه MASWE-0012 واختبار MASTG-TEST-0204 والمثال MASTG-DEMO-0007."},
  {q:"مفتاح AES مكتوب مباشرة داخل الكود. ما المشكلة؟", o:["يمكن استخراجه بالهندسة العكسية فيسقط التشفير كله","لا مشكلة إن كان طويلاً","يبطئ التطبيق","يمنع نشر التطبيق"], w:"الحزمة تُفك بسهولة. المفتاح يجب أن يُولَّد على الجهاز ويُحفظ في Keystore أو Keychain."},
  {q:"ما المشكلة في وضع التشفير ECB؟", o:["الكتل المتطابقة تُشفَّر إلى نتائج متطابقة فتظهر أنماط البيانات","لا يدعم المفاتيح الطويلة","أبطأ من كل الأوضاع","لا يعمل على iOS"], w:"لذلك يُفضَّل وضع مصادَق عليه مثل GCM مع IV فريد."},
  {q:"لتحويل كلمة مرور المستخدم إلى مفتاح تشفير نستخدم:", o:["دالة اشتقاق مثل PBKDF2 أو Argon2 مع salt","هاش MD5 مرة واحدة","ترميز Base64","كلمة المرور نفسها كمفتاح"], w:"دوال الاشتقاق بطيئة عمداً ومع salt، فتصعّب هجمات التخمين."},
  {q:"ما الذي يغطيه الضابط MASVS-CRYPTO-2؟", o:["إدارة المفاتيح طوال دورة حياتها: التوليد والتخزين والحماية","اختيار ألوان الواجهة","التحقق من الشهادات","إدارة الأذونات"], w:"CRYPTO-1 للخوارزميات والاستخدام الصحيح، وCRYPTO-2 لإدارة المفاتيح."}
],
auth: [
  {q:"أين يجب أن يُفرض قرار المصادقة والتفويض في التطبيقات المتصلة بخادم؟", o:["على الخادم","في واجهة التطبيق فقط","في ملف Info.plist","في السجلات"], w:"أي فحص في التطبيق فقط يمكن تجاوزه، فالخادم يجب أن يتحقق في كل طلب."},
  {q:"تطبيق يستدعي evaluatePolicy للبصمة ويكمل إن رجعت true فقط. ما المشكلة؟", o:["مصادقة حدثية يمكن تجاوزها بالـ hooking، والأفضل ربطها بمفتاح في Keychain","لا توجد مشكلة","الدالة evaluatePolicy غير موجودة","المشكلة في سرعة البصمة"], w:"المصادقة المرتبطة بالتشفير أقوى لأن نجاح البصمة يفتح مفتاحاً لازماً، فلا يوجد جواب يمكن تزويره."},
  {q:"ما المطلوب عند تسجيل خروج المستخدم؟", o:["إنهاء الجلسة على الخادم، لا حذف التوكن محلياً فقط","إغلاق التطبيق فقط","حذف التطبيق","مسح السجلات"], w:"إن بقيت الجلسة صالحة على الخادم، فمن سرق التوكن يستطيع الاستمرار في استخدامه."},
  {q:"ما الإضافة الموصى بها لتدفق Authorization Code في OAuth 2.0 للتطبيقات؟", o:["PKCE","Base64","MD5","allowBackup"], w:"PKCE يحمي رمز التفويض من الاعتراض واستخدامه من تطبيق آخر."},
  {q:"لماذا يُعد SMS-OTP أضعف من البدائل الأخرى؟", o:["يمكن اعتراضه أو سرقة الرقم عبر تبديل الشريحة SIM swap","لأنه مجاني","لأنه لا يعمل على iOS","لأنه طويل جداً"], w:"البدائل الأقوى: تطبيقات TOTP، أو توقيع المعاملة عبر Push مع مفاتيح."},
  {q:"ما وظيفة setInvalidatedByBiometricEnrollment(true) على مفتاح في Android Keystore؟", o:["إبطال المفتاح إذا أُضيفت بصمة جديدة إلى الجهاز","تسريع التعرّف على البصمة","حذف التطبيق","إطفاء الشاشة"], w:"يمنع من أضاف بصمته إلى جهاز مسروق من استخدام المفتاح. وهذا ما يغطيه MASWE-0022."}
],
network: [
  {q:"ما وظيفة تثبيت الهوية (Certificate / Identity Pinning)؟", o:["أن يثق التطبيق بمفتاح أو شهادة محددة لخادمه بدلاً من كل الجهات","تسريع الاتصال","تشفير قاعدة البيانات","إخفاء عنوان IP"], w:"يحمي من جهة إصدار مخترقة أو شهادة ثبّتها مهاجم على الجهاز."},
  {q:"HostnameVerifier في التطبيق يُرجع true دائماً. ما النتيجة؟", o:["يقبل التطبيق شهادة لأي نطاق فيصبح عرضة لهجوم MITM","يصبح الاتصال أسرع وأكثر أماناً","يرفض التطبيق كل الاتصالات","لا تأثير"], w:"التحقق من اسم النطاق جزء أساسي من TLS. تعطيله يعني أن أي شهادة صالحة لأي موقع ستُقبل."},
  {q:"ما اسم الآلية في iOS التي تفرض HTTPS افتراضياً؟", o:["App Transport Security (ATS)","Network Security Configuration","Keychain","FLAG_SECURE"], w:"ATS في iOS، ويقابلها Network Security Configuration في Android."},
  {q:"منذ Android 7، ماذا يحدث افتراضياً لشهادات CA التي يثبّتها المستخدم؟", o:["لا تثق بها التطبيقات افتراضياً","تُحذف عند الإقلاع","تُستخدم لتوقيع التطبيقات","تُرسل إلى Google"], w:"لذلك يثبّت المختبِر شهادة البروكسي في مخزن النظام على جهاز بصلاحيات root، أو يعدّل إعداد التطبيق."},
  {q:"لماذا يجب وضع مفتاح احتياطي وخطة تحديث عند تطبيق Pinning؟", o:["لأن تغيير شهادة الخادم قد يقطع التطبيق عن الخادم تماماً","لأن Google تشترط مفتاحاً واحداً","لتسريع التطبيق","لحماية قاعدة البيانات"], w:"التثبيت سلاح ذو حدين؛ بدون تخطيط يتعطل التطبيق عند تجديد الشهادة."},
  {q:"ما الحد الأدنى المقبول من إصدارات TLS اليوم؟", o:["TLS 1.2، والأفضل 1.3","SSL 3.0","TLS 1.0","SSL 2.0"], w:"الإصدارات الأقدم فيها ضعف معروف ويجب تعطيلها."}
],
platform: [
  {q:"Activity في Android عليها android:exported=\"true\" دون أي إذن. ما الخطر؟", o:["أي تطبيق آخر يستطيع تشغيلها وإرسال بيانات إليها","لا يوجد خطر","تمنع التطبيق من العمل","تجعل التطبيق أبطأ"], w:"المكوّنات المُصدَّرة أبواب مفتوحة، فيجب تقليلها وحمايتها بأذونات."},
  {q:"ما الخطر في addJavascriptInterface مع محتوى ويب غير موثوق؟", o:["كود JavaScript في الصفحة يستطيع استدعاء دوال أصلية داخل التطبيق","يبطئ الصفحة فقط","يمنع تحميل الصور","لا يوجد خطر"], w:"هذا ما يصفه MASWE-0033: كشف وظائف أصلية حساسة عبر WebViews."},
  {q:"كيف تمنع لقطات الشاشة لشاشة حساسة في Android؟", o:["FLAG_SECURE","allowBackup","exported=true","Log.d"], w:"FLAG_SECURE يمنع اللقطات والتسجيل وظهور المحتوى في قائمة التطبيقات الأخيرة."},
  {q:"لماذا تُعد Universal Links أكثر أماناً من Custom URL Schemes في iOS؟", o:["لأنها مرتبطة بنطاق يملكه المطوّر، بينما أي تطبيق يستطيع تسجيل نفس المخطط","لأنها أسرع","لأنها مشفّرة بـ MD5","لا يوجد فرق"], w:"ملف apple-app-site-association على النطاق يثبت ملكية المطوّر للرابط."},
  {q:"ما هو هجوم التراكب (Overlay / Tapjacking)؟", o:["تطبيق خبيث يعرض طبقة فوق تطبيقك ليخدع المستخدم بالنقر","سرقة كلمة مرور الشبكة اللاسلكية","تكرار الإشعارات","تشفير الملفات"], w:"الحماية بخيارات مثل filterTouchesWhenObscured وsetHideOverlayWindows."},
  {q:"ما الأفضل للتواصل بين المكوّنات الداخلية لتطبيقك على Android؟", o:["Intents صريحة (Explicit)","Intents ضمنية (Implicit) عامة","الحافظة","ملفات على التخزين الخارجي"], w:"الـ Intent الصريح يحدد المكوّن الهدف بالاسم، فلا يستطيع تطبيق آخر التقاطه."}
],
code: [
  {q:"أي استعلام SQL آمن من الحقن؟", o:["استعلام مُعَلْمَن يستخدم ? وتُمرَّر القيم منفصلة","دمج مُدخل المستخدم مباشرة في نص الاستعلام","تشفير الاستعلام بـ Base64","حفظ الاستعلام في السجلات"], w:"في الاستعلام المُعَلْمَن تُعامل القيمة كبيانات فقط، ولا تُنفَّذ كجزء من الأمر."},
  {q:"ما هدف الضابط MASVS-CODE-2؟", o:["وجود آلية تُجبر المستخدم على التحديث عند اكتشاف ثغرة حرجة","تحديث ألوان التطبيق","حذف النسخ القديمة من المتجر","تغيير كلمة المرور دورياً"], w:"مثل Play In-App Updates بالوضع الفوري، مع رفض الخادم للإصدارات القديمة."},
  {q:"ما الأداة المناسبة لاكتشاف مكتبات بها ثغرات معروفة؟", o:["OWASP dependency-check","Frida","Burp Suite","Magisk"], w:"وهذا ما يغطيه CODE-3 ونقطة الضعف MASWE-0044."},
  {q:"أي مما يلي حماية يوفّرها المترجم ضد أخطاء الذاكرة؟", o:["Stack Canaries","allowBackup","FLAG_SECURE","Keychain"], w:"Stack Canaries وPIE وARC أمثلة على ميزات المترجم (MASWE-0045)."},
  {q:"ما مصادر المدخلات غير الموثوقة في تطبيق الموبايل؟", o:["الواجهة وIPC والشبكة والملفات والروابط العميقة","الكود المصدري للمطوّر فقط","أيقونة التطبيق","اسم الحزمة فقط"], w:"كل ما يأتي من خارج كود التطبيق يجب التحقق منه وتنقيته."},
  {q:"ما وظيفة targetSdkVersion في Android؟", o:["تحديد إصدار السلوك الأمني والواجهات الذي يلتزم به التطبيق","تحديد لون التطبيق","تحديد عدد المستخدمين","تحديد حجم الملف"], w:"استهداف أحدث إصدار يفعّل الحمايات الجديدة. وعدم ذلك هو MASWE-0042."}
],
resilience: [
  {q:"هل يعني غياب كشف الروت وجود ثغرة بالضرورة؟", o:["لا، هي حماية إضافية حسب نموذج التهديد وتكمّل الضوابط الأساسية","نعم، دائماً","نعم، لتطبيقات الألعاب فقط","لا، لأن الروت لم يعد موجوداً"], w:"MASVS يوضح أن غياب هذه الإجراءات لا يسبب ثغرة بحد ذاته."},
  {q:"أداة مثل R8/ProGuard تُستخدم لـ:", o:["تعتيم الكود وتصغيره لتصعيب التحليل الساكن","اعتراض الشبكة","فك تشفير ملفات IPA","كسر حماية iOS"], w:"هذا جزء من RESILIENCE-3: آليات ضد التحليل الساكن."},
  {q:"Google Play Integrity API وApple App Attest أمثلة على:", o:["إثبات سلامة الجهاز والتطبيق (Attestation)","مكتبات تشفير","أدوات اعتراض","متاجر بديلة"], w:"يتحقق منها الخادم، فلا يستطيع المهاجم تزوير النتيجة داخل التطبيق بسهولة."},
  {q:"أي علامة قد تدل على وجود Frida على الجهاز؟", o:["عملية frida-server، أو المنفذ 27042، أو مكتباتها في ذاكرة العملية","وجود Keychain","تفعيل FLAG_SECURE","استخدام HTTPS"], w:"هذه من أشهر طرق كشف أدوات التحليل الديناميكي (RESILIENCE-4)."},
  {q:"لماذا يُفضَّل أن يكون رد فعل الحماية متأخراً ومتنوعاً بدلاً من رسالة فورية؟", o:["لأن الرسالة الفورية تدل المهاجم بسرعة على مكان الفحص","لأن الرسائل تستهلك البطارية","لأن Apple تمنع الرسائل","لا فرق بينهما"], w:"كلما صعب على المهاجم معرفة أين ومتى يُفحص، زادت كلفة التجاوز."},
  {q:"الضابط MASVS-RESILIENCE-1 يتعلق بـ:", o:["التحقق من سلامة المنصة (نظام التشغيل)","تشفير الشبكة","الأذونات","الإشعارات"], w:"مثل كشف root وjailbreak والمحاكيات، وإثبات سلامة الجهاز."}
],
privacy: [
  {q:"تطبيق مصباح يدوي يطلب إذن الموقع وجهات الاتصال. أي ضابط يخالفه غالباً؟", o:["MASVS-PRIVACY-1 (تقليل الوصول)","MASVS-NETWORK-2","MASVS-CODE-4","MASVS-RESILIENCE-3"], w:"المصباح لا يحتاج هذه البيانات، فطلبها مخالف لمبدأ تقليل البيانات."},
  {q:"ما الفرق بين إخفاء الهوية (Anonymization) والأسماء المستعارة (Pseudonymization)؟", o:["الأول يزيل الصلة بالشخص نهائياً، والثاني يستبدلها بمعرّف يمكن ربطه بمعلومات إضافية","لا فرق بينهما","الأول للتشفير والثاني للضغط","الأول لـ iOS والثاني لـ Android"], w:"كلاهما من تقنيات PRIVACY-2 لمنع التعرّف على المستخدم."},
  {q:"أين يعلن تطبيق iOS نطاقات التتبع التي يتصل بها؟", o:["في Privacy Manifest (ملف PrivacyInfo.xcprivacy)","في AndroidManifest.xml","في Keychain","في Logcat"], w:"عبر المفتاح NSPrivacyTrackingDomains. ونقص هذا الإعلان هو MASWE-0074."},
  {q:"هل يغني MASVS-PRIVACY عن تقييم أثر حماية البيانات (DPIA)؟", o:["لا، هو خط أساس ولا يحل محل التقييمات القانونية الشاملة","نعم، دائماً","نعم، في أوروبا فقط","نعم، إذا نجح التطبيق في كل الاختبارات"], w:"MASVS يركّز على التطبيق نفسه، والتقييمات القانونية يجريها خبراء خصوصية."},
  {q:"ماذا يعني الضابط MASVS-PRIVACY-4؟", o:["تمكين المستخدم من إدارة بياناته وحذفها وسحب موافقته","منع المستخدم من حذف حسابه","تشفير البيانات فقط","إخفاء سياسة الخصوصية"], w:"السيطرة على البيانات تشمل الحذف والتعديل وسحب الموافقة وتغيير الإعدادات."},
  {q:"مكتبة إعلانات (SDK) تبدأ بجمع البيانات قبل موافقة المستخدم. ما المطلوب؟", o:["منع المكتبة من الجمع حتى تأكيد الموافقة","لا شيء، فالمكتبة ليست من كتابة المطوّر","حذف سياسة الخصوصية","تعطيل HTTPS"], w:"المطوّر مسؤول عن كل ما يجمعه تطبيقه، بما فيه مكتبات الأطراف الثالثة."}
],
practice: [
  {q:"أي أداة تحوّل ملف APK إلى كود Java مقروء؟", o:["jadx","Burp Suite","Magisk","Keychain-Dumper"], w:"jadx مفكّك (decompiler) لتطبيقات Android."},
  {q:"ما وظيفة Burp Suite أو mitmproxy في اختبار التطبيقات؟", o:["اعتراض حركة الشبكة وتعديلها","تعتيم الكود","منح صلاحيات root","توقيع التطبيقات"], w:"تعمل كبروكسي بين التطبيق والخادم."},
  {q:"ما المطلوب في تحدي Android UnCrackable L1؟", o:["استخراج نص سرّي مخفي داخل التطبيق","تصميم واجهة جديدة","نشر التطبيق في المتجر","تسريع التطبيق"], w:"يمكن حلّه بقراءة الكود في jadx أو بـ hooking عبر Frida."},
  {q:"DVIA-v2 وiGoat-Swift هما:", o:["تطبيقات iOS فيها ثغرات متعمّدة للتدريب","أدوات لكسر حماية iOS","مكتبات تشفير","معايير أمنية"], w:"من قائمة MASTG-APP للتدرّب بشكل قانوني."},
  {q:"متى يكون اختبار تطبيق ما قانونياً؟", o:["عندما يكون تطبيقك، أو مخصصاً للتدريب، أو لديك تصريح مكتوب","دائماً إذا كان التطبيق مجانياً","إذا كان منشوراً في المتجر","إذا لم يلاحظ أحد"], w:"مهاجمة نظام دون تصريح مخالفة للقانون في كثير من الدول."},
  {q:"ما هي أداة objection؟", o:["أداة مبنية على Frida توفّر أوامر جاهزة مثل تجاوز pinning","متصفح ويب","نظام تشغيل للهواتف","ملف إعدادات للشبكة"], w:"objection تسهّل مهام Frida الشائعة دون كتابة سكربتات من الصفر."}
]
};

var GLOSSARY = [
  ["ASVS","معيار OWASP للتحقق من أمان تطبيقات الويب والخوادم. يُستخدم لتقييم الخادم الذي يتصل به التطبيق."],
  ["ATS","App Transport Security: آلية iOS التي تفرض HTTPS وTLS 1.2 فأكثر افتراضياً."],
  ["Attestation","إثبات سلامة الجهاز أو التطبيق لخادم بعيد، مثل Play Integrity وApp Attest."],
  ["Black / Gray / White-box","أنواع الاختبار حسب المعلومات المتاحة للمختبِر: لا شيء، بعضها، كلها."],
  ["CA","Certificate Authority: جهة تصدر الشهادات الرقمية وتثق بها الأجهزة."],
  ["Certificate Pinning","تثبيت الهوية: الثقة بشهادة أو مفتاح عام محدد للخادم فقط."],
  ["Control","ضابط: متطلب أمني في MASVS، مثل MASVS-STORAGE-1."],
  ["CWE","Common Weakness Enumeration: قائمة عالمية لأنواع نقاط ضعف البرمجيات."],
  ["Deep Link","رابط يفتح شاشة محددة داخل التطبيق؛ مدخل غير موثوق يجب التحقق منه."],
  ["Decompiler","أداة تحوّل الكود المُترجم إلى كود قريب من المصدر، مثل jadx."],
  ["Demo (MASTG-DEMO)","مثال عملي يحتوي تطبيقاً فيه الثغرة وسكربتاً ونتيجة متوقعة."],
  ["DPIA","تقييم أثر حماية البيانات الذي تفرضه GDPR."],
  ["Exported Component","مكوّن Android يمكن للتطبيقات الأخرى استدعاؤه."],
  ["FLAG_SECURE","خيار نافذة في Android يمنع لقطات الشاشة وتسجيلها."],
  ["Frida","أداة حقن ديناميكي لتعديل الدوال وقت التشغيل على Android وiOS."],
  ["Hooking","اعتراض استدعاء دالة لتغيير مدخلاتها أو مخرجاتها."],
  ["Intent","رسالة في Android لطلب إجراء من مكوّن آخر؛ صريحة أو ضمنية."],
  ["IPC","Inter-Process Communication: التواصل بين العمليات والتطبيقات."],
  ["Jailbreak / Root","كسر قيود النظام للحصول على صلاحيات كاملة في iOS أو Android."],
  ["JWT","JSON Web Token: توكن موقّع للمصادقة بلا حالة؛ مرمّز وليس مشفّراً."],
  ["KDF","دالة اشتقاق مفتاح من كلمة مرور، مثل PBKDF2 وArgon2."],
  ["Keychain","مخزن الأسرار الآمن في iOS."],
  ["Keystore","مخزن المفاتيح المدعوم بالعتاد في Android."],
  ["MASTG","دليل اختبار أمان تطبيقات الموبايل: اختبارات وتقنيات وأدوات وأمثلة."],
  ["MASVS","معيار التحقق من أمان تطبيقات الموبايل: 24 ضابطاً في 8 مجموعات."],
  ["MASWE","قائمة نقاط ضعف أمان تطبيقات الموبايل: 78 نقطة ضعف."],
  ["MITM","هجوم الرجل في المنتصف: اعتراض الاتصال بين التطبيق والخادم."],
  ["Obfuscation","التعتيم: تعقيد الكود عمداً لتصعيب فهمه."],
  ["PII","المعلومات الشخصية التي تعرّف هوية الفرد."],
  ["PKCE","إضافة لـ OAuth 2.0 تحمي رمز التفويض من الاعتراض."],
  ["Profile","ملف اختبار يحدد عمق الفحص المناسب: L1 وL2 وR وP."],
  ["RASP","حماية ذاتية وقت التشغيل تجمع إشارات التلاعب وتتفاعل معها."],
  ["Repackaging","تفكيك التطبيق وتعديله وإعادة بنائه وتوقيعه."],
  ["Sandbox","صندوق الرمل: عزل كل تطبيق عن بقية التطبيقات والنظام."],
  ["SAST / DAST","أدوات التحليل الأمني الساكن والديناميكي."],
  ["SBOM","قائمة بكل المكوّنات البرمجية التي يتضمنها التطبيق."],
  ["Secure Enclave","معالج أمان منفصل في أجهزة Apple لحماية المفاتيح."],
  ["TEE","بيئة تنفيذ موثوقة معزولة داخل المعالج، يعتمد عليها Keystore."],
  ["Threat Model","نموذج التهديدات: تحديد ما نحميه وممن وكيف قد يُهاجَم."],
  ["TLS","البروتوكول الذي يشفّر الاتصال ويتحقق من هوية الخادم."],
  ["WebView","مكوّن يعرض محتوى ويب داخل التطبيق."]
];

/* English quiz bank: same order as the Arabic bank; the first option is always the correct one. */
var QUIZ_EN = {
overview: [
  {q:"Which question does MASVS answer?", o:["Which security requirements the app must meet","How to hack the app step by step","Which tools are needed to test the app","How to publish the app in the store"], w:"MASVS is a standard that defines the controls (requirements). The test steps and tools are in the MASTG."},
  {q:"What is the correct order of the MAS traceability chain?", o:["MASVS control, then MASWE weakness, then MASTG test, then demo","MASTG test, then MASVS control, then MASWE, then demo","MASWE, then demo, then MASVS, then MASTG","Demo, then MASTG, then MASWE, then MASVS"], w:"We start from the general control, then the specific weakness, then the test on a given platform, then the working example."},
  {q:"The MASWE weakness list is inspired by which global list?", o:["CWE","CVE","OWASP Top 10","ISO 27001"], w:"MASWE complements the Common Weakness Enumeration and focuses on mobile. CVE, by contrast, lists specific vulnerabilities in specific products."},
  {q:"What happened to the MAS Checklist file with MASTG v2?", o:["It is no longer published as an official file; the website and repositories are the source","It became mandatory for every app","It turned into a mobile app","It was merged into MASVS as new controls"], w:"The project dropped the PDF and the checklist sheet because the data is now structured and cross-linked on the site and in the repositories, so any sheet can be built from it."},
  {q:"What are the MAS Crackmes for?", o:["Practice challenges for reverse engineering","An automated vulnerability scanner","An official OWASP certificate","A crypto library for developers"], w:"They are the UnCrackable apps you can practice on, also used as examples in the MASTG."},
  {q:"How many controls does MASVS v2 have?", o:["24 controls","8 controls","78 controls","285 controls"], w:"24 controls across 8 groups. 78 is the number of weaknesses, and 285 the number of tests."}
],
masvs: [
  {q:"How many groups and controls are in MASVS v2.1.0?", o:["8 groups and 24 controls","7 groups and 20 controls","10 groups and 78 controls","8 groups and 285 controls"], w:"Eight groups, from STORAGE to PRIVACY, with 24 controls in total. PRIVACY was added in v2.1.0."},
  {q:"What does the ID MASVS-NETWORK-2 mean?", o:["The second control in the network group (identity pinning)","The second level of protection","The second version of the standard","Weakness number 2"], w:"The format is MASVS-group-control number. The number is a position inside the group, not a difficulty level."},
  {q:"Does OWASP issue official certificates for apps that meet MASVS?", o:["No, OWASP does not certify or accredit anyone","Yes, after an automated test","Yes, for banking apps only","Yes, through Google Play"], w:"OWASP is vendor-neutral and does not certify vendors or apps. Any certificate carrying the MASVS name is not official OWASP certification."},
  {q:"Which standard is used to assess the backend the app talks to?", o:["OWASP ASVS","MASVS-NETWORK","MASWE","MAS Crackmes"], w:"MASVS covers the client side only. The backend is assessed with ASVS and tested with the WSTG."},
  {q:"What is the recommended way to verify an app against the standard?", o:["An \"open book\" review with access to code, documentation and developers","Running a single automated scanner","Reading the app's store description","Asking users about their experience"], w:"An open review gives the tester access to the code, the documentation and an account for every role. Automated tools alone are not enough."},
  {q:"Which group covers data in transit?", o:["MASVS-NETWORK","MASVS-STORAGE","MASVS-CODE","MASVS-PRIVACY"], w:"NETWORK covers data in transit, while STORAGE covers data stored on the device (data at rest)."}
],
profiles: [
  {q:"In MAS-L1, who is considered the attacker?", o:["Other apps installed on the device","The device user","The operating system","The app developer"], w:"L1 assumes the OS can be trusted and the user is not an adversary; the threat comes from other apps."},
  {q:"Which profile assumes the device user may be the attacker (a reverse engineer or a cheater)?", o:["MAS-R","MAS-L1","MAS-P","MAS-L2"], w:"MAS-R is about resilience against reverse engineering and tampering, where the device owner may try to cheat or steal logic."},
  {q:"A banking app moves money and contains valuable business logic. Which combination fits best?", o:["L2 + P + R","L1 only","P only","R only"], w:"High-risk data and sensitive functionality (L2), personal data (P), and business assets that need protection from tampering (R)."},
  {q:"Which statement about MAS-R is true?", o:["It augments L1 and L2 and is not used instead of them","It replaces all other controls","It guarantees 100% protection","It is meant for news apps"], w:"R is an extra layer on top of the base controls, and it cannot guarantee full success because the attacker owns the device."},
  {q:"What does MAS-L2 assume on top of L1?", o:["The OS may be compromised (root or jailbreak) and a third party may have physical access","The user is the only adversary","There is no network threat","The app never connects to the internet"], w:"L2 does not trust the OS security controls and treats anyone with physical access as a potential attacker."},
  {q:"What is MAS-EUDIW?", o:["A specialized profile for the EU Digital Identity Wallet","A tool for jailbreaking iOS","A new MASVS version","A list of weaknesses for games"], w:"A specialized profile that turns EU regulatory requirements for digital identity wallets into testable requirements mapped to MASWE."}
],
maswe: [
  {q:"What role does MASWE play in the MAS framework?", o:["The bridge between general MASVS controls and specific MASTG tests","A full replacement for MASVS","A tool for decrypting apps","A list of infected apps in the stores"], w:"MASWE names the actual mistake that breaks a control and points to the tests that detect it."},
  {q:"Which section of a weakness page describes the causes a developer introduces?", o:["Modes of Introduction","Impact","Mitigations","References"], w:"Modes of Introduction lists only testable causes. Impact covers the consequences, and Mitigations the fixes."},
  {q:"How many weaknesses are in MASWE v1.0.0?", o:["78","24","119","285"], w:"78. The number 119 was the size of the beta before consolidation."},
  {q:"\"The app excludes sensitive data from application logs\" is an example of what?", o:["The requirement statement of weakness MASWE-0005","The name of a scanning tool","The result of a dynamic test","An L2 testing profile"], w:"Every weakness carries a positive requirement statement, its inverse, ready for contracts and policies."},
  {q:"Why is \"failed MASWE-0005 due to verbose logging in production\" better than \"failed MASVS-STORAGE-2\"?", o:["Because it is specific and can be fixed directly","Because it is shorter","Because MASVS is old and no longer used","Because MASWE issues an official certificate"], w:"The control is very general; the weakness plus its mode of introduction tells the developer exactly what to change."},
  {q:"By the golden rule, every Mitigation in MASWE should have a matching:", o:["MASTG-BEST best practice","MASTG-TOOL tool","MASTG-APP app","New MASVS control"], w:"A mitigation is an instruction for developers, which is exactly what MASTG-BEST provides. Every mode of introduction, in turn, should have a MASTG-TEST."}
],
mastg: [
  {q:"What are the four sections of a MASTG v2 test?", o:["Overview, then Steps, then Observation, then Evaluation","Intro, then Body, then Conclusion, then References","Static, then Dynamic, then Manual, then Hooks","Android, then iOS, then Web, then Desktop"], w:"The fixed structure: what we check, the steps, the raw output, then the pass or fail decision."},
  {q:"What does a MASTG-DEMO contain?", o:["A sample app with the weakness, a script, the expected output and an evaluation","Theory only","A glossary","A video tutorial"], w:"Every demo can be run on your own device, and all demos are built and tested automatically on every update."},
  {q:"What is the difference between Observation and Evaluation?", o:["Observation is the raw output; Evaluation decides pass or fail","There is no difference","Observation is for passing and Evaluation for failing","Observation is for developers and Evaluation for users"], w:"First record what you saw without interpretation, then apply the judgment criteria in Evaluation."},
  {q:"Which MASTG component tells developers how to build the right fix?", o:["MASTG-BEST","MASTG-TOOL","MASTG-APP","MASTG-TECH"], w:"Best practices are for fixes. TECH entries are methods for testers, TOOL entries are tools, and APP entries are practice apps."},
  {q:"Why were the long v1 tests split into atomic tests in v2?", o:["To make automation, referencing and a clear pass or fail possible","To reduce the number of tests","Because Android stopped supporting them","To hide them from attackers"], w:"A long chapter mixes several checks and cannot fail cleanly. An atomic test checks one thing only."},
  {q:"What do MASTG-TECH components provide?", o:["Reusable methods that tests call, such as reverse engineering an app","New security controls","Lists of developer names","Apps for sale in the store"], w:"Instead of repeating the explanation in every test, the test points to a technique such as MASTG-TECH-0013."}
],
taxonomy: [
  {q:"An app written in Kotlin that runs only on Android is:", o:["A native app","A hybrid app","A progressive web app (PWA)","A web app"], w:"Kotlin and Java are Android's official languages; Swift and Objective-C are iOS's."},
  {q:"What characterizes a hybrid app?", o:["It shows web content inside a WebView with a bridge to device features","It is written in C only","It needs no operating system","It runs on desktops only"], w:"Frameworks such as Cordova and Ionic wrap a web UI inside a native shell."},
  {q:"Which of these is a cross-platform framework?", o:["Flutter","Swift","Logcat","Keychain"], w:"Flutter builds one Dart codebase for several platforms. Swift is the iOS language, Logcat is Android's log, and the Keychain is the iOS secret store."},
  {q:"Which technology lets a PWA work offline?", o:["Service Workers","Android Keystore","Intents","Secure Enclave"], w:"A Service Worker is a background script that caches resources so the app works without internet."},
  {q:"Do MASVS controls change with the app type?", o:["No, the same controls apply, though the testing approach may differ","Yes, each type has its own standard","MASVS is for native apps only","MASVS is for web apps only"], w:"The standard doesn't care how an app is built, but the tools and the places you look change."},
  {q:"What is the most dangerous scenario in a hybrid app?", o:["An XSS flaw in the page calling sensitive functions through the native bridge","A large app size","Inconsistent colors","Running on both Android and iOS"], w:"If the bridge exposes functions such as file access, JavaScript injected into the page can use them."}
],
testing: [
  {q:"Which test type is the most common, with the tester given some information (usually just credentials)?", o:["Gray-box","Black-box","White-box","Red-box"], w:"Gray-box is a compromise between cost, speed and depth, which is why it is the most common."},
  {q:"What is the difference between static and dynamic analysis?", o:["Static is done without running the app, dynamic while it runs","Static is for iOS and dynamic for Android","Static is always manual and dynamic always automated","There is no difference"], w:"Both can be manual or automated; the difference is whether the app is running."},
  {q:"A scanner reported a CSRF vulnerability in a mobile app. What is the right reaction?", o:["Evaluate the real exploit scenario; it may be a false positive","Treat it as critical immediately","Delete the app","Ignore all of the tool's findings"], w:"CSRF needs the browser to attach the session cookie automatically, and links on mobile open in a browser with a separate cookie store."},
  {q:"What is the first phase of a penetration test?", o:["Preparation: defining the scope and getting written authorization","Exploitation","Reporting","Mapping the application"], w:"The phases are preparation, intelligence gathering, mapping, exploitation and reporting."},
  {q:"An app encodes the password with Base64 before storing it. Is it protected?", o:["No, Base64 is an easily reversed encoding, not encryption","Yes, it is strongly encrypted","Yes, it is securely hashed","Yes, because it is in the Keystore"], w:"Encoding only changes the format; anyone can decode it without a key."},
  {q:"What does \"data in use\" mean?", o:["Data loaded into the app's memory","Data in a database","Data being sent to the server","Deleted data"], w:"The three states: at rest (stored), in use (in memory) and in transit (moving)."}
],
reversing: [
  {q:"What is the goal of reverse engineering in app testing?", o:["Understanding the compiled app's code","Stealing user accounts","Making the app faster","Publishing the app in the store"], w:"Reverse engineering is analysis for comprehension. Changing behavior is tampering."},
  {q:"Modifying an app's behavior to disable root detection is called:", o:["Tampering","Logging","Pinning","Encoding"], w:"Tampering means modifying the app, the running process or its environment to change its behavior."},
  {q:"Frida is an example of:", o:["A dynamic binary instrumentation tool that injects scripts at runtime","A crypto library","An alternative app store","A security standard"], w:"Frida injects JavaScript into the running process to intercept and modify functions (hooking)."},
  {q:"What does the MASTG phrase \"the reverse engineer always wins\" mean?", o:["Protections raise the effort required but cannot stop an attack for good","No protection is needed","Reverse engineering is always illegal","iOS apps cannot be analyzed"], w:"The attacker owns the device, so given enough time they will succeed. Protections make that expensive."},
  {q:"Why does a tester need to disable SSL pinning in a black-box test?", o:["To intercept and inspect the traffic through a proxy","To speed up the network","To delete the app","To encrypt the data"], w:"Pinning stops the proxy from reading the traffic, so it must be bypassed to test the network and the backend."},
  {q:"Which technique analyzes code paths mathematically to find an input that reaches a given result?", o:["Symbolic execution","Binary patching","Obfuscation","Repackaging"], w:"Symbolic execution, with tools such as angr, computes the required inputs instead of trying them one by one."}
],
android: [
  {q:"How does Android isolate apps from each other?", o:["It gives each app its own Linux user (UID) and private data directory","It runs all apps as the same user","It blocks apps from using the internet","It deletes app data when an app closes"], w:"The sandbox is built on Linux user separation, together with SELinux and permissions."},
  {q:"Which file declares permissions, components and options such as allowBackup?", o:["AndroidManifest.xml","classes.dex","resources.arsc","Info.plist"], w:"The manifest is the app's identity card. Info.plist is its iOS counterpart."},
  {q:"Which of these is NOT one of the four main Android app components?", o:["Keychain","Activity","Service","Content Provider"], w:"The Keychain is the iOS secret store. The four components are Activities, Services, Broadcast Receivers and Content Providers."},
  {q:"What did APK signature scheme v3 add?", o:["Support for signing key rotation","Database encryption","No more need for signing","Installation over Bluetooth"], w:"v2 protects the whole file, v3 adds key rotation, and v4 adds incremental installation."},
  {q:"What is Zygote's job in Android?", o:["A parent process that is forked for each app to speed up launches","A network interception tool","A key store","An alternative app store"], w:"Zygote preloads shared libraries, then forks for every new app."},
  {q:"Why does a tester usually need a rooted device?", o:["To access the app's data directories and run tools such as frida-server","Because apps don't run without it","To make the device faster","Because Google requires it"], w:"Root lets you inspect /data/data, install the proxy certificate in the system store and run your tools."}
],
ios: [
  {q:"What does the Secure Enclave do?", o:["It is a separate security processor that protects keys and Touch ID / Face ID data","It is an app store","It is a debugging tool","It is a folder for photos"], w:"The Secure Enclave is isolated from the main processor and doesn't reveal its secrets even to the OS."},
  {q:"Which protection class makes a file readable only while the device is unlocked?", o:["NSFileProtectionComplete","NSFileProtectionNone","CompleteUntilFirstUserAuthentication","FairPlay"], w:"Complete is the strongest. The default, CompleteUntilFirstUserAuthentication, stays available after the first unlock."},
  {q:"Why must App Store apps be decrypted before static analysis?", o:["Because they are encrypted with FairPlay","Because they are zipped with the user's password","Because they are written in Java","Because Apple strips the code"], w:"FairPlay encrypts the executable; it is usually decrypted on a jailbroken device with tools such as frida-ios-dump."},
  {q:"Where are permission prompt texts (such as for the camera) declared in an iOS app?", o:["Info.plist","AndroidManifest.xml","The Keychain","Logcat"], w:"Keys such as NSCameraUsageDescription go in Info.plist and are shown to the user when the permission is requested."},
  {q:"What is App Attest for?", o:["Letting the server verify that requests come from a genuine copy of the app","Making the app faster","Bypassing jailbreak detection","Backing up data"], w:"App Attest is part of DeviceCheck and helps the server reject modified apps and fake devices."},
  {q:"Which jailbreak type stays active automatically after a reboot?", o:["Untethered","Tethered","Semi-tethered","Semi-untethered"], w:"Untethered needs neither a computer nor re-activation. Tethered needs a computer on every boot."}
],
storage: [
  {q:"Where should encryption keys be stored on Android?", o:["The Android Keystore","SharedPreferences","External storage","A text file in assets"], w:"The Keystore is hardware-backed (TEE or StrongBox), and the key never leaves it."},
  {q:"What does MASVS-STORAGE-2 cover?", o:["Unintentional leaks such as logs and backups","Choosing the encryption algorithm","Verifying the server certificate","Biometric login"], w:"STORAGE-1 covers intentional storage, and STORAGE-2 covers side-effect leaks the developer can prevent."},
  {q:"A session token is stored in plain text in UserDefaults. What is the problem?", o:["UserDefaults offers no protection beyond the sandbox; the token belongs in the Keychain","No problem, iOS is secure","UserDefaults is slow","The token is too short"], w:"UserDefaults can be read on a jailbroken device or from a backup."},
  {q:"Which Keychain accessibility value is the weakest and should be avoided?", o:["kSecAttrAccessibleAlways","kSecAttrAccessibleWhenUnlockedThisDeviceOnly","kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly","kSecAttrAccessibleWhenUnlocked"], w:"Always keeps the item available even while the device is locked, and it is deprecated. Use the strictest value that fits."},
  {q:"Why is Android external storage risky for sensitive data?", o:["Because other apps and the user may access it","Because it is slower","Because it is wiped automatically","Because it is encrypted with a weak key"], w:"External storage is shared and outside the app sandbox, which is what tests such as MASTG-TEST-0200 check."},
  {q:"How do you stop the keyboard from caching input in a sensitive field on Android?", o:["Use an inputType such as textNoSuggestions or textPassword","Enable allowBackup","Use Log.d","Turn off the internet"], w:"These input types prevent suggestions and caching of what the user types."}
],
crypto: [
  {q:"Which algorithm is recommended for encrypting data (confidentiality)?", o:["AES-GCM-256","DES","RC4","MD5"], w:"AES-GCM-256 or ChaCha20-Poly1305. DES and RC4 are weak, and MD5 is a hash function, not encryption."},
  {q:"Why shouldn't java.util.Random be used for keys or tokens?", o:["Its output is predictable; use SecureRandom instead","It is very slow","It doesn't work on Android","It only produces negative numbers"], w:"This is exactly what MASWE-0012, test MASTG-TEST-0204 and demo MASTG-DEMO-0007 illustrate."},
  {q:"An AES key is hardcoded in the source. What is the problem?", o:["It can be extracted by reverse engineering, breaking the whole encryption","No problem if it is long","It slows the app down","It prevents publishing the app"], w:"App packages are easy to unpack. Keys must be generated on the device and kept in the Keystore or Keychain."},
  {q:"What is wrong with the ECB mode?", o:["Identical blocks encrypt to identical output, revealing data patterns","It doesn't support long keys","It is the slowest mode","It doesn't work on iOS"], w:"That is why an authenticated mode such as GCM with a unique IV is preferred."},
  {q:"To turn a user's password into an encryption key we use:", o:["A key derivation function such as PBKDF2 or Argon2 with a salt","A single MD5 hash","Base64 encoding","The password itself as the key"], w:"KDFs are deliberately slow and salted, which makes guessing attacks hard."},
  {q:"What does MASVS-CRYPTO-2 cover?", o:["Key management across the lifecycle: generation, storage and protection","Choosing UI colors","Certificate validation","Permission management"], w:"CRYPTO-1 covers algorithms and correct use; CRYPTO-2 covers key management."}
],
auth: [
  {q:"Where must authentication and authorization decisions be enforced in apps with a backend?", o:["On the server","In the app's UI only","In Info.plist","In the logs"], w:"Any check done only in the app can be bypassed, so the server must verify every request."},
  {q:"An app calls evaluatePolicy for biometrics and continues only if it returns true. What is the problem?", o:["It is event-based and can be bypassed by hooking; better bind it to a Keychain key","There is no problem","evaluatePolicy doesn't exist","Biometrics are too slow"], w:"Crypto-based authentication is stronger because a successful scan unlocks a required key, so there is no answer to fake."},
  {q:"What is required when a user logs out?", o:["Ending the session on the server too, not just deleting the token locally","Just closing the app","Uninstalling the app","Clearing the logs"], w:"If the session stays valid on the server, anyone who stole the token can keep using it."},
  {q:"What addition is recommended for the OAuth 2.0 Authorization Code flow in apps?", o:["PKCE","Base64","MD5","allowBackup"], w:"PKCE protects the authorization code from being intercepted and used by another app."},
  {q:"Why is SMS-OTP weaker than the alternatives?", o:["It can be intercepted, or the number stolen via a SIM swap","Because it is free","Because it doesn't work on iOS","Because it is too long"], w:"Stronger options: TOTP apps, or transaction signing through push notifications with keys."},
  {q:"What does setInvalidatedByBiometricEnrollment(true) do on an Android Keystore key?", o:["It invalidates the key if a new fingerprint is enrolled on the device","It speeds up fingerprint recognition","It uninstalls the app","It turns off the screen"], w:"It stops someone who adds their fingerprint to a stolen device from using the key. This is what MASWE-0022 covers."}
],
network: [
  {q:"What does certificate / identity pinning do?", o:["It makes the app trust a specific key or certificate for its server instead of every CA","It speeds up the connection","It encrypts the database","It hides the IP address"], w:"It protects against a compromised CA or a certificate an attacker installed on the device."},
  {q:"The app's HostnameVerifier always returns true. What happens?", o:["The app accepts a certificate for any domain, making MITM possible","The connection becomes faster and more secure","The app rejects all connections","Nothing"], w:"Hostname verification is a core part of TLS. Disabling it means any valid certificate for any site is accepted."},
  {q:"What is the iOS mechanism that enforces HTTPS by default?", o:["App Transport Security (ATS)","Network Security Configuration","The Keychain","FLAG_SECURE"], w:"ATS on iOS; its Android counterpart is the Network Security Configuration."},
  {q:"Since Android 7, what happens by default to CA certificates installed by the user?", o:["Apps don't trust them by default","They are deleted at boot","They are used to sign apps","They are sent to Google"], w:"That is why testers install the proxy certificate in the system store on a rooted device, or adjust the app's configuration."},
  {q:"Why do you need a backup pin and an update plan when pinning?", o:["Because changing the server certificate could cut the app off from the server","Because Google requires a single pin","To make the app faster","To protect the database"], w:"Pinning cuts both ways; without planning, the app breaks when the certificate is renewed."},
  {q:"What is the minimum acceptable TLS version today?", o:["TLS 1.2, ideally 1.3","SSL 3.0","TLS 1.0","SSL 2.0"], w:"Older versions have known weaknesses and should be disabled."}
],
platform: [
  {q:"An Android Activity has android:exported=\"true\" with no permission. What is the risk?", o:["Any other app can launch it and send it data","There is no risk","It stops the app from working","It makes the app slower"], w:"Exported components are open doors; keep them to a minimum and protect them with permissions."},
  {q:"What is the risk of addJavascriptInterface with untrusted web content?", o:["JavaScript in the page can call native functions inside the app","It only slows the page down","It blocks images from loading","There is no risk"], w:"This is what MASWE-0033 describes: sensitive native functionality exposed in WebViews."},
  {q:"How do you prevent screenshots of a sensitive screen on Android?", o:["FLAG_SECURE","allowBackup","exported=true","Log.d"], w:"FLAG_SECURE blocks screenshots, screen recording and the preview in the recent apps list."},
  {q:"Why are Universal Links safer than custom URL schemes on iOS?", o:["They are tied to a domain the developer owns, while any app can register the same scheme","They are faster","They are encrypted with MD5","There is no difference"], w:"The apple-app-site-association file on the domain proves the developer owns the link."},
  {q:"What is an overlay (tapjacking) attack?", o:["A malicious app draws a layer over your app to trick the user into tapping","Stealing the Wi-Fi password","Duplicating notifications","Encrypting files"], w:"Defenses include filterTouchesWhenObscured and setHideOverlayWindows."},
  {q:"What is best for communication between your app's own components on Android?", o:["Explicit intents","Broad implicit intents","The clipboard","Files on external storage"], w:"An explicit intent names the target component, so no other app can intercept it."}
],
code: [
  {q:"Which SQL query is safe from injection?", o:["A parameterized query using ? with the values passed separately","Concatenating user input into the query string","Encoding the query with Base64","Saving the query in the logs"], w:"In a parameterized query the value is treated as data only and never executed as part of the command."},
  {q:"What is the goal of MASVS-CODE-2?", o:["A mechanism that forces users to update when a critical flaw is found","Updating the app's colors","Deleting old versions from the store","Changing passwords regularly"], w:"For example Play In-App Updates in immediate mode, with the backend rejecting old versions."},
  {q:"Which tool fits for finding libraries with known vulnerabilities?", o:["OWASP dependency-check","Frida","Burp Suite","Magisk"], w:"This is what CODE-3 and weakness MASWE-0044 cover."},
  {q:"Which of these is a compiler-provided protection against memory bugs?", o:["Stack canaries","allowBackup","FLAG_SECURE","The Keychain"], w:"Stack canaries, PIE and ARC are examples of compiler features (MASWE-0045)."},
  {q:"What are the sources of untrusted input in a mobile app?", o:["The UI, IPC, the network, files and deep links","Only the developer's source code","The app icon","Only the package name"], w:"Anything that comes from outside the app's code must be validated and sanitized."},
  {q:"What does targetSdkVersion do on Android?", o:["It sets which security behavior and API level the app commits to","It sets the app's color","It sets the number of users","It sets the file size"], w:"Targeting the latest version enables new protections. Not doing so is MASWE-0042."}
],
resilience: [
  {q:"Does missing root detection necessarily mean a vulnerability?", o:["No, it is an extra protection that depends on the threat model and complements the base controls","Yes, always","Yes, for games only","No, because rooting no longer exists"], w:"MASVS states that the absence of these measures does not cause a vulnerability by itself."},
  {q:"A tool such as R8/ProGuard is used for:", o:["Obfuscating and shrinking code to hinder static analysis","Intercepting network traffic","Decrypting IPA files","Jailbreaking iOS"], w:"This is part of RESILIENCE-3: anti-static analysis mechanisms."},
  {q:"Google Play Integrity API and Apple App Attest are examples of:", o:["Device and app attestation","Crypto libraries","Interception tools","Alternative stores"], w:"The server verifies them, so an attacker cannot easily fake the result inside the app."},
  {q:"Which sign may reveal Frida on a device?", o:["A frida-server process, port 27042, or its libraries in process memory","The presence of the Keychain","FLAG_SECURE being enabled","Using HTTPS"], w:"These are among the best-known ways to detect dynamic analysis tools (RESILIENCE-4)."},
  {q:"Why is a delayed, varied reaction better than an immediate message?", o:["An immediate message quickly shows the attacker where the check is","Messages drain the battery","Apple forbids messages","There is no difference"], w:"The harder it is for the attacker to tell where and when checks happen, the costlier the bypass."},
  {q:"MASVS-RESILIENCE-1 is about:", o:["Validating the integrity of the platform (the OS)","Network encryption","Permissions","Notifications"], w:"Such as root, jailbreak and emulator detection, and device attestation."}
],
privacy: [
  {q:"A flashlight app asks for location and contacts. Which control does it most likely violate?", o:["MASVS-PRIVACY-1 (minimize access)","MASVS-NETWORK-2","MASVS-CODE-4","MASVS-RESILIENCE-3"], w:"A flashlight doesn't need this data, so asking for it breaks data minimization."},
  {q:"What is the difference between anonymization and pseudonymization?", o:["The first removes the link to the person for good; the second replaces it with an ID that extra information can re-link","There is no difference","The first is for encryption and the second for compression","The first is for iOS and the second for Android"], w:"Both are PRIVACY-2 techniques to prevent identifying the user."},
  {q:"Where does an iOS app declare the tracking domains it connects to?", o:["In the Privacy Manifest (PrivacyInfo.xcprivacy)","In AndroidManifest.xml","In the Keychain","In Logcat"], w:"Through the NSPrivacyTrackingDomains key. A missing declaration is MASWE-0074."},
  {q:"Does MASVS-PRIVACY replace a Data Protection Impact Assessment (DPIA)?", o:["No, it is a baseline and doesn't replace comprehensive legal assessments","Yes, always","Yes, in Europe only","Yes, if the app passes every test"], w:"MASVS focuses on the app itself; legal assessments are done by privacy experts."},
  {q:"What does MASVS-PRIVACY-4 mean?", o:["Letting users manage and delete their data and withdraw consent","Stopping users from deleting their accounts","Only encrypting data","Hiding the privacy policy"], w:"Control over data includes deletion, modification, withdrawing consent and changing settings."},
  {q:"An ad SDK starts collecting data before the user consents. What is required?", o:["Stop the SDK from collecting until consent is confirmed","Nothing, the SDK isn't the developer's code","Delete the privacy policy","Disable HTTPS"], w:"Developers are responsible for everything their app collects, including third-party SDKs."}
],
practice: [
  {q:"Which tool turns an APK into readable Java code?", o:["jadx","Burp Suite","Magisk","Keychain-Dumper"], w:"jadx is a decompiler for Android apps."},
  {q:"What do Burp Suite or mitmproxy do in app testing?", o:["Intercept and modify network traffic","Obfuscate code","Grant root access","Sign apps"], w:"They act as a proxy between the app and the server."},
  {q:"What is the task in the Android UnCrackable L1 challenge?", o:["Extract a secret string hidden in the app","Design a new UI","Publish the app in the store","Make the app faster"], w:"You can solve it by reading the code in jadx or by hooking with Frida."},
  {q:"DVIA-v2 and iGoat-Swift are:", o:["Deliberately vulnerable iOS apps for practice","iOS jailbreak tools","Crypto libraries","Security standards"], w:"They are on the MASTG-APP list, so you can practice legally."},
  {q:"When is testing an app legal?", o:["When it is your app, built for practice, or you have written permission","Always, if the app is free","If it is published in the store","If nobody notices"], w:"Attacking a system without permission is illegal in many countries."},
  {q:"What is objection?", o:["A Frida-based tool with ready-made commands such as bypassing pinning","A web browser","A phone operating system","A network config file"], w:"objection simplifies common Frida tasks without writing scripts from scratch."}
]
};

var GLOSSARY_EN = {
  "ASVS":"OWASP's standard for verifying the security of web apps and backends. Used to assess the server the app talks to.",
  "ATS":"App Transport Security: the iOS mechanism that enforces HTTPS and TLS 1.2 or later by default.",
  "Attestation":"Proving the integrity of a device or app to a remote server, for example with Play Integrity and App Attest.",
  "Black / Gray / White-box":"Test types by how much the tester knows: nothing, some, or everything.",
  "CA":"Certificate Authority: an entity that issues the digital certificates devices trust.",
  "Certificate Pinning":"Trusting only a specific certificate or public key for a server.",
  "Control":"A security requirement in MASVS, such as MASVS-STORAGE-1.",
  "CWE":"Common Weakness Enumeration: a global list of software weakness types.",
  "Deep Link":"A link that opens a specific screen in the app; untrusted input that must be validated.",
  "Decompiler":"A tool that turns compiled code back into code close to the source, such as jadx.",
  "Demo (MASTG-DEMO)":"A working example with a vulnerable sample app, a script and the expected output.",
  "DPIA":"The Data Protection Impact Assessment required by the GDPR.",
  "Exported Component":"An Android component that other apps can invoke.",
  "FLAG_SECURE":"An Android window flag that blocks screenshots and screen recording.",
  "Frida":"A dynamic instrumentation tool for modifying functions at runtime on Android and iOS.",
  "Hooking":"Intercepting a function call to change its inputs or outputs.",
  "Intent":"An Android message that requests an action from another component; explicit or implicit.",
  "IPC":"Inter-Process Communication: communication between processes and apps.",
  "Jailbreak / Root":"Removing OS restrictions to gain full privileges on iOS or Android.",
  "JWT":"JSON Web Token: a signed token for stateless authentication; encoded, not encrypted.",
  "KDF":"A function that derives a key from a password, such as PBKDF2 or Argon2.",
  "Keychain":"The secure secret store on iOS.",
  "Keystore":"The hardware-backed key store on Android.",
  "MASTG":"The Mobile Application Security Testing Guide: tests, techniques, tools and demos.",
  "MASVS":"The Mobile Application Security Verification Standard: 24 controls in 8 groups.",
  "MASWE":"The Mobile Application Security Weakness Enumeration: 78 weaknesses.",
  "MITM":"Man-in-the-middle: intercepting the connection between the app and the server.",
  "Obfuscation":"Deliberately making code harder to understand.",
  "PII":"Personally identifiable information.",
  "PKCE":"An OAuth 2.0 extension that protects the authorization code from interception.",
  "Profile":"A testing profile that sets the right testing depth: L1, L2, R and P.",
  "RASP":"Runtime self-protection that gathers tampering signals and reacts to them.",
  "Repackaging":"Unpacking an app, modifying it, then rebuilding and re-signing it.",
  "Sandbox":"Isolating each app from other apps and from the system.",
  "SAST / DAST":"Static and dynamic application security testing tools.",
  "SBOM":"A list of every software component included in the app.",
  "Secure Enclave":"A separate security processor in Apple devices that protects keys.",
  "TEE":"A trusted, isolated execution environment inside the processor, which the Keystore relies on.",
  "Threat Model":"Working out what we protect, from whom, and how it could be attacked.",
  "TLS":"The protocol that encrypts the connection and verifies the server's identity.",
  "WebView":"A component that displays web content inside the app."
};


(function () {
  "use strict";
  var app = document.getElementById("app");
  var KEY = "masAr.v1", LKEY = "masAr.lang";
  var LANG = app.getAttribute("lang") === "en" ? "en" : "ar";
  var QUIZ = { ar: QUIZ_AR, en: QUIZ_EN };

  var LESSONS = [
    { id: "overview",   p: 1, t: { ar: "ما هو مشروع OWASP MAS؟", en: "What is OWASP MAS?" }, s: { ar: "الخريطة الكاملة للمشروع", en: "The full map of the project" } },
    { id: "masvs",      p: 1, t: { ar: "المعيار MASVS", en: "The MASVS standard" }, s: { ar: "8 مجموعات و24 ضابطاً", en: "8 groups and 24 controls" } },
    { id: "profiles",   p: 1, t: { ar: "ملفات الاختبار MAS Profiles", en: "MAS testing profiles" }, s: { ar: "L1 وL2 وR وP وEUDIW", en: "L1, L2, R, P and EUDIW" } },
    { id: "maswe",      p: 1, t: { ar: "نقاط الضعف MASWE", en: "MASWE weaknesses" }, s: { ar: "78 نقطة ضعف وتشريحها", en: "78 weaknesses and their anatomy" } },
    { id: "mastg",      p: 1, t: { ar: "دليل الاختبار MASTG", en: "The MASTG testing guide" }, s: { ar: "الاختبارات والأمثلة والتقنيات", en: "Tests, demos and techniques" } },
    { id: "taxonomy",   p: 2, t: { ar: "أنواع تطبيقات الموبايل", en: "Types of mobile apps" }, s: { ar: "أصلي، متعدد المنصات، هجين", en: "Native, cross-platform, hybrid" } },
    { id: "testing",    p: 2, t: { ar: "منهجية اختبار الأمان", en: "Security testing methodology" }, s: { ar: "الصناديق، التحليل، المراحل", en: "Boxes, analysis, phases" } },
    { id: "reversing",  p: 2, t: { ar: "الهندسة العكسية والتلاعب", en: "Reverse engineering and tampering" }, s: { ar: "لماذا وكيف", en: "Why and how" } },
    { id: "android",    p: 3, t: { ar: "منصة Android", en: "The Android platform" }, s: { ar: "العزل، APK، التوقيع، البيئة", en: "Isolation, APK, signing, setup" } },
    { id: "ios",        p: 3, t: { ar: "منصة iOS", en: "The iOS platform" }, s: { ar: "Secure Enclave، IPA، الجيلبريك", en: "Secure Enclave, IPA, jailbreak" } },
    { id: "storage",    p: 4, c: "storage",    t: { ar: "تخزين البيانات", en: "Data storage" }, s: { ar: "MASVS-STORAGE", en: "MASVS-STORAGE" } },
    { id: "crypto",     p: 4, c: "crypto",     t: { ar: "التشفير", en: "Cryptography" }, s: { ar: "MASVS-CRYPTO", en: "MASVS-CRYPTO" } },
    { id: "auth",       p: 4, c: "auth",       t: { ar: "المصادقة والتفويض", en: "Authentication and authorization" }, s: { ar: "MASVS-AUTH", en: "MASVS-AUTH" } },
    { id: "network",    p: 4, c: "network",    t: { ar: "الاتصال بالشبكة", en: "Network communication" }, s: { ar: "MASVS-NETWORK", en: "MASVS-NETWORK" } },
    { id: "platform",   p: 4, c: "platform",   t: { ar: "التفاعل مع المنصة", en: "Platform interaction" }, s: { ar: "MASVS-PLATFORM", en: "MASVS-PLATFORM" } },
    { id: "code",       p: 4, c: "code",       t: { ar: "جودة الكود", en: "Code quality" }, s: { ar: "MASVS-CODE", en: "MASVS-CODE" } },
    { id: "resilience", p: 4, c: "resilience", t: { ar: "مقاومة الهندسة العكسية", en: "Resilience against reverse engineering" }, s: { ar: "MASVS-RESILIENCE", en: "MASVS-RESILIENCE" } },
    { id: "privacy",    p: 4, c: "privacy",    t: { ar: "الخصوصية", en: "Privacy" }, s: { ar: "MASVS-PRIVACY", en: "MASVS-PRIVACY" } },
    { id: "practice",   p: 5, t: { ar: "الأدوات والتدريب العملي", en: "Tools and hands-on practice" }, s: { ar: "أدوات وتطبيقات وCrackmes", en: "Tools, apps and Crackmes" } }
  ];
  var EXTRA = [
    { id: "glossary", t: { ar: "قاموس المصطلحات", en: "Glossary" } },
    { id: "final", t: { ar: "الاختبار النهائي", en: "Final exam" } }
  ];
  var ORDER = LESSONS.concat(EXTRA);
  var CATS = ["storage", "crypto", "auth", "network", "platform", "code", "resilience", "privacy"];
  var PASS = 0.6, FINAL_N = 20, TOTAL = LESSONS.length;
  var byId = {};
  ORDER.forEach(function (l, i) { l.i = i; byId[l.id] = l; });
  function lessonNo(l) { return LESSONS.indexOf(l) + 1; }

  /* ---------- interface text ---------- */
  var UI = {
    ar: {
      parts: ["الصورة الكبيرة", "مفاهيم أساسية", "المنصّات", "مجموعات MASVS الثمانية", "التطبيق العملي"],
      ord: ["الأول", "الثاني", "الثالث", "الرابع", "الخامس"],
      part: function (p) { return "الجزء " + this.ord[p - 1] + " · " + this.parts[p - 1]; },
      eyebrow: function (l) { return this.part(l.p) + " · الدرس " + lessonNo(l) + " من " + TOTAL; },
      count: function (n) { return n === 1 ? "درس واحد" : n === 2 ? "درسان" : n <= 10 ? n + " دروس" : n + " درساً"; },
      top: function (n) { return n + " من " + TOTAL + " درساً"; },
      none: "<b>ابدأ رحلتك.</b> لم تحلّ أي اختبار بعد.",
      some: function (n, fin) { return "<b>أنجزت " + n + " من " + TOTAL + " درساً.</b>" + (fin ? " أفضل نتيجة في الاختبار النهائي: " + fin.best + " من " + fin.total + "." : ""); },
      start: "ابدأ الدرس الأول", cont: function (t) { return "تابع: " + t; }, allDone: "أنجزت كل الدروس · الاختبار النهائي",
      review: "المراجعة", home: "الصفحة الرئيسية", prev: "→ السابق", next: "التالي ←",
      quiz: "اختبر نفسك", finalQuiz: "أسئلة الاختبار النهائي",
      qWord: function (n) { return n >= 3 && n <= 10 ? n + " أسئلة" : n + " سؤالاً"; },
      passMark: "النجاح من 60%",
      best: function (b, t) { return "أفضل نتيجة سابقة: " + b + " من " + t; },
      letters: ["أ", "ب", "ج", "د"],
      right: "<b>إجابة صحيحة.</b> ",
      wrong: function (c) { return "<b>إجابة خاطئة.</b> الصحيح: «" + c + "». "; },
      reviewLesson: function (t) { return "راجع درس: " + t; },
      finalPass: "<b>أحسنت!</b> نتيجة تدل على فهم جيد لمشروع MAS. أعد المحاولة لتظهر لك أسئلة أخرى.",
      finalFail: "<b>تحتاج مراجعة.</b> اضغط على روابط الدروس تحت الإجابات الخاطئة، ثم حاول مرة أخرى.",
      pass: function (perfect) { return "<b>أحسنت، أنجزت هذا الدرس.</b> " + (perfect ? "إجابات كاملة!" : "راجع شرح الإجابات الخاطئة أعلاه."); },
      fail: "<b>لم تصل إلى 60% بعد.</b> راجع الدرس وشرح الإجابات، ثم أعد الاختبار.",
      retry: "أعد الاختبار", newQs: "أسئلة جديدة", nextBtn: function (t) { return "التالي: " + t; }
    },
    en: {
      parts: ["The big picture", "Core concepts", "The platforms", "The eight MASVS groups", "Hands-on practice"],
      part: function (p) { return "Part " + p + " · " + this.parts[p - 1]; },
      eyebrow: function (l) { return this.part(l.p) + " · Lesson " + lessonNo(l) + " of " + TOTAL; },
      count: function (n) { return n === 1 ? "1 lesson" : n + " lessons"; },
      top: function (n) { return n + " of " + TOTAL + " lessons"; },
      none: "<b>Start your journey.</b> You haven't taken any quiz yet.",
      some: function (n, fin) { return "<b>You've completed " + n + " of " + TOTAL + " lessons.</b>" + (fin ? " Best final exam score: " + fin.best + " of " + fin.total + "." : ""); },
      start: "Start lesson 1", cont: function (t) { return "Continue: " + t; }, allDone: "All lessons done · Final exam",
      review: "Review", home: "Home", prev: "← Previous", next: "Next →",
      quiz: "Test yourself", finalQuiz: "Final exam questions",
      qWord: function (n) { return n + " questions"; },
      passMark: "pass mark 60%",
      best: function (b, t) { return "Best previous score: " + b + " of " + t; },
      letters: ["A", "B", "C", "D"],
      right: "<b>Correct.</b> ",
      wrong: function (c) { return "<b>Incorrect.</b> The right answer is “" + c + "”. "; },
      reviewLesson: function (t) { return "Review lesson: " + t; },
      finalPass: "<b>Well done!</b> That score shows a solid grasp of the MAS project. Try again to get different questions.",
      finalFail: "<b>Some review needed.</b> Use the lesson links under the wrong answers, then try again.",
      pass: function (perfect) { return "<b>Well done, lesson complete.</b> " + (perfect ? "A perfect score!" : "Review the explanations of the wrong answers above."); },
      fail: "<b>Not at 60% yet.</b> Review the lesson and the explanations, then retake the quiz.",
      retry: "Retake quiz", newQs: "New questions", nextBtn: function (t) { return "Next: " + t; }
    }
  };
  function U() { return UI[LANG]; }
  function tx(o) { return o[LANG]; }

  /* ---------- progress storage (this viewer's browser only) ---------- */
  var store = {};
  try { var raw = localStorage.getItem(KEY); if (raw) { var o = JSON.parse(raw); if (o && typeof o === "object") store = o; } } catch (e) {}
  if (!store.scores || typeof store.scores !== "object") store.scores = {};
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
  function score(id) { return store.scores[id]; }
  function isPassed(id) { var s = score(id); return !!(s && s.total && s.best / s.total >= PASS); }
  function record(id, right, total) {
    var s = store.scores[id] || { best: -1 };
    s.last = right; s.total = total;
    if (right > s.best) s.best = right;
    store.scores[id] = s; save();
  }
  function passedCount() { return LESSONS.filter(function (l) { return isPassed(l.id); }).length; }

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function catDot(l) { return l.c ? '<i class="cdot" style="background:var(--c-' + l.c + ')"></i>' : ""; }
  function badge(id) {
    var s = score(id);
    if (!s || !s.total) return "<span></span>";
    return '<span class="nav-s ' + (s.best / s.total >= PASS ? "pass" : "fail") + '">' + s.best + "/" + s.total + "</span>";
  }

  /* ---------- side index ---------- */
  function buildNav() {
    var u = U(), h = "";
    for (var p = 1; p <= 5; p++) {
      h += "<h2>" + u.part(p) + "</h2><ol>";
      LESSONS.filter(function (l) { return l.p === p; }).forEach(function (l) {
        h += '<li><a class="nav-a" href="#' + l.id + '" data-id="' + l.id + '"><span class="nav-n">' + lessonNo(l) + "</span><span>" + catDot(l) + esc(tx(l.t)) + "</span>" + badge(l.id) + "</a></li>";
      });
      h += "</ol>";
    }
    h += "<h2>" + u.review + "</h2><ol>";
    h += '<li><a class="nav-a" href="#home" data-id="home"><span class="nav-n">⌂</span><span>' + u.home + "</span><span></span></a></li>";
    EXTRA.forEach(function (l) {
      h += '<li><a class="nav-a" href="#' + l.id + '" data-id="' + l.id + '"><span class="nav-n">' + (l.id === "final" ? "✓" : "Aa") + "</span><span>" + esc(tx(l.t)) + "</span>" + (l.id === "final" ? badge("final") : "<span></span>") + "</a></li>";
    });
    h += "</ol>";
    $("#side").innerHTML = h;
    markCurrent();
  }
  function markCurrent() {
    var cur = currentView();
    $$(".nav-a").forEach(function (a) { if (a.getAttribute("data-id") === cur) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }

  /* ---------- home ---------- */
  function updateProgress() {
    var u = U(), n = passedCount(), pct = Math.round(n / TOTAL * 100) + "%";
    $("#topLbl").textContent = u.top(n);
    $("#topBar").style.width = pct;
    $("#homeBar").style.width = pct;
    $("#homeProgressText").innerHTML = (n === 0 && !Object.keys(store.scores).length) ? u.none : u.some(n, score("final"));
    var next = LESSONS.filter(function (l) { return !isPassed(l.id); })[0], btn = $("#continueBtn");
    if (!next) { btn.href = "#final"; btn.textContent = u.allDone; }
    else if (n === 0 && !score(next.id)) { btn.href = "#" + next.id; btn.textContent = u.start; }
    else { btn.href = "#" + next.id; btn.textContent = u.cont(tx(next.t)); }
  }
  function buildMap() {
    var u = U(), h = "";
    for (var p = 1; p <= 5; p++) {
      var ls = LESSONS.filter(function (l) { return l.p === p; });
      h += '<div class="map-part"><h3>' + u.part(p) + "<small>" + u.count(ls.length) + '</small></h3><div class="map-list">';
      ls.forEach(function (l) {
        h += '<a class="map-a" href="#' + l.id + '"><span class="nav-n">' + lessonNo(l) + '</span><span style="min-width:0"><span class="t">' + catDot(l) + esc(tx(l.t)) + '</span><span class="s">' + esc(tx(l.s)) + "</span></span>" + badge(l.id) + "</a>";
      });
      h += "</div></div>";
    }
    $("#courseMap").innerHTML = h;
  }

  /* ---------- lesson chrome ---------- */
  function decorate() {
    LESSONS.forEach(function (l) {
      var v = $("#v-" + l.id); if (!v) return;
      $$("[data-eyebrow]", v).forEach(function (eb) {
        var lang = eb.closest("[lang]").getAttribute("lang") === "en" ? "en" : "ar";
        eb.textContent = UI[lang].eyebrow(l);
      });
    });
    $$(".spectrum").forEach(function (sp) {
      var c = sp.getAttribute("data-cat"), h = "";
      CATS.forEach(function (k) {
        var on = c === k, light = k === "resilience" || k === "privacy";
        h += '<span style="--seg:var(--c-' + k + ")" + (c === "all" ? ";opacity:1" : "") + (on && light ? ";color:#fff" : "") + '"' + (on ? ' class="on">MASVS-' + k.toUpperCase() : ">") + "</span>";
      });
      sp.innerHTML = h;
    });
  }
  function renderPagers() {
    var u = U();
    $$("[data-pager]").forEach(function (pg) {
      var l = byId[pg.closest("[data-view]").getAttribute("data-view")];
      var prev = ORDER[l.i - 1], next = ORDER[l.i + 1], h = "";
      if (prev) h += '<a class="prev" href="#' + prev.id + '"><small>' + u.prev + "</small>" + esc(tx(prev.t)) + "</a>";
      if (next) h += '<a class="next" href="#' + next.id + '"><small>' + u.next + "</small>" + esc(tx(next.t)) + "</a>";
      pg.innerHTML = h;
    });
  }
  function renderGlossary() {
    var gl = $("#glossaryList");
    if (gl) gl.innerHTML = GLOSSARY.map(function (g) { return "<div><dt>" + esc(g[0]) + "</dt><dd>" + esc(LANG === "en" ? GLOSSARY_EN[g[0]] : g[1]) + "</dd></div>"; }).join("");
  }

  /* ---------- quizzes: state is language-neutral, so switching language keeps answers ---------- */
  function newState(id) {
    var items;
    if (id !== "final") items = QUIZ_AR[id].map(function (_, i) { return { from: id, qi: i }; });
    else {
      var pool = [];
      Object.keys(QUIZ_AR).forEach(function (k) { QUIZ_AR[k].forEach(function (_, i) { pool.push({ from: k, qi: i }); }); });
      items = shuffle(pool).slice(0, FINAL_N);
    }
    items.forEach(function (it) { it.perm = shuffle([0, 1, 2, 3]); it.chosen = null; });
    return { id: id, items: items, recorded: false };
  }
  function qd(it) { return QUIZ[LANG][it.from][it.qi]; }
  function answered(st) { return st.items.filter(function (it) { return it.chosen !== null; }).length; }
  function rightCount(st) { return st.items.filter(function (it) { return it.chosen === 0; }).length; }

  function renderQuiz(sec) {
    var st = sec._st, u = U(), n = st.items.length, prev = score(st.id);
    var h = '<div class="quiz-h"><h2>' + (st.id === "final" ? u.finalQuiz : u.quiz) + '</h2><span class="quiz-meta">' + u.qWord(n) + " · " + u.passMark + ' · <span class="qcount">' + answered(st) + " / " + n + "</span></span></div>";
    if (prev && prev.total) h += '<p class="quiz-meta" style="margin:0">' + u.best(prev.best, prev.total) + "</p>";
    h += '<div class="qs">';
    st.items.forEach(function (it, i) {
      var d = qd(it);
      h += '<fieldset class="q" data-i="' + i + '"><legend><span class="qn">' + (i + 1) + ".</span><span>" + esc(d.q) + '</span></legend><div class="opts">';
      it.perm.forEach(function (oi, k) {
        h += '<button type="button" class="opt" data-o="' + oi + '"><span class="L">' + u.letters[k] + "</span><span>" + esc(d.o[oi]) + '</span><span class="m" aria-hidden="true"></span></button>';
      });
      h += '</div><p class="why" hidden></p></fieldset>';
    });
    h += '</div><div class="result" hidden aria-live="polite"></div>';
    sec.innerHTML = h;
    $$(".q", sec).forEach(function (fs, i) { if (st.items[i].chosen !== null) paintAnswer(sec, fs, st.items[i]); });
    if (answered(st) === n) paintResult(sec);
  }
  function paintAnswer(sec, fs, it) {
    var u = U(), d = qd(it), ok = it.chosen === 0;
    $$(".opt", fs).forEach(function (b) {
      var oi = +b.getAttribute("data-o");
      b.disabled = true;
      if (oi === 0) { b.classList.add("right"); $(".m", b).textContent = "✓"; }
      else if (oi === it.chosen) { b.classList.add("wrong"); $(".m", b).textContent = "✗"; }
      else b.classList.add("dim");
    });
    var src = sec._st.id === "final" ? ' <a href="#' + it.from + '">' + esc(u.reviewLesson(tx(byId[it.from].t))) + "</a>" : "";
    var why = $(".why", fs);
    why.innerHTML = (ok ? u.right : u.wrong(esc(d.o[0]))) + esc(d.w) + src;
    why.hidden = false;
  }
  function paintResult(sec) {
    var st = sec._st, u = U(), n = st.items.length, r = rightCount(st), pass = r / n >= PASS;
    var l = byId[st.id], next = ORDER[l.i + 1], res = $(".result", sec);
    var msg = st.id === "final" ? (pass ? u.finalPass : u.finalFail) : (pass ? u.pass(r === n) : u.fail);
    var btns = '<div class="btns"><button type="button" class="btn ghost" data-retry>' + (st.id === "final" ? u.newQs : u.retry) + "</button>";
    btns += next ? '<a class="btn" href="#' + next.id + '">' + esc(u.nextBtn(tx(next.t))) + "</a>" : '<a class="btn" href="#home">' + u.home + "</a>";
    res.className = "result " + (pass ? "pass" : "fail");
    res.innerHTML = '<div class="score">' + r + "/" + n + "</div><p>" + msg + "</p>" + btns + "</div>";
    res.hidden = false;
  }
  function answer(btn) {
    var sec = btn.closest(".quiz"), fs = btn.closest(".q"), st = sec._st;
    var it = st.items[+fs.getAttribute("data-i")];
    if (!it || it.chosen !== null) return;
    it.chosen = +btn.getAttribute("data-o");
    paintAnswer(sec, fs, it);
    var why = $(".why", fs); why.setAttribute("tabindex", "-1");
    try { why.focus({ preventScroll: true }); } catch (e) {}
    var n = st.items.length, done = answered(st);
    $(".qcount", sec).textContent = done + " / " + n;
    if (done === n) {
      if (!st.recorded) { record(st.id, rightCount(st), n); st.recorded = true; }
      paintResult(sec);
      refresh();
    }
  }
  document.addEventListener("click", function (e) {
    var t = e.target;
    var o = t.closest && t.closest(".opt");
    if (o && !o.disabled) { answer(o); return; }
    var rt = t.closest && t.closest("[data-retry]");
    if (rt) { var sec = rt.closest(".quiz"); sec._st = newState(sec.getAttribute("data-quiz")); renderQuiz(sec); sec.scrollIntoView({ block: "start" }); return; }
    var lb = t.closest && t.closest(".lang-switch button");
    if (lb) setLang(lb.getAttribute("data-lang"), true);
  });

  /* ---------- language ---------- */
  function setLang(l, persist) {
    LANG = l === "en" ? "en" : "ar";
    var dir = LANG === "ar" ? "rtl" : "ltr";
    app.setAttribute("lang", LANG); app.setAttribute("dir", dir);
    document.documentElement.lang = LANG; document.documentElement.dir = dir;
    if (persist) { try { localStorage.setItem(LKEY, LANG); } catch (e) {} }
    $$(".lang-switch button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === LANG ? "true" : "false"); });
    $("#side").setAttribute("aria-label", LANG === "ar" ? "فهرس الدروس" : "Lessons");
    renderPagers();
    renderGlossary();
    $$(".quiz").forEach(function (s) { if (s._st) renderQuiz(s); });
    refresh();
  }

  /* ---------- routing ---------- */
  function currentView() {
    var h = (location.hash || "").replace(/^#/, "");
    return document.getElementById("v-" + h) ? h : "home";
  }
  function route() {
    var cur = currentView();
    $$("[data-view]").forEach(function (v) { v.hidden = v.getAttribute("data-view") !== cur; });
    markCurrent();
    closeNav();
    window.scrollTo(0, 0);
  }
  function refresh() { buildNav(); buildMap(); updateProgress(); }

  /* ---------- drawer ---------- */
  var menuBtn = $("#menuBtn");
  function closeNav() { document.body.classList.remove("nav-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $("#backdrop").addEventListener("click", closeNav);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });

  /* ---------- reset ---------- */
  var armed = null;
  $("#resetBtn").addEventListener("click", function () {
    var hint = $("#resetHint");
    if (!armed) { hint.hidden = false; armed = setTimeout(function () { armed = null; hint.hidden = true; }, 4000); return; }
    clearTimeout(armed); armed = null; hint.hidden = true;
    store = { scores: {} }; save();
    $$(".quiz").forEach(function (s) { s._st = newState(s.getAttribute("data-quiz")); renderQuiz(s); });
    refresh();
  });

  /* ---------- boot ---------- */
  decorate();
  $$(".quiz").forEach(function (s) { s._st = newState(s.getAttribute("data-quiz")); });
  setLang(LANG, false);
  route();
  window.addEventListener("hashchange", route);
})();
