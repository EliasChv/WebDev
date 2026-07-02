

async function selectStaticDropdown(fieldSelector, optionText) {
    const wait = ms => new Promise(res => setTimeout(res, ms));
    const normalize = s => s.toLowerCase().replace(/[^\w\s]/gi, '').trim();


    const field = document.querySelector(fieldSelector);

    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    field.click();
    await wait(400);

    let dropdown = null;
    for (let i = 0; i < 20; i++) {
        dropdown = [...document.querySelectorAll('[role="listbox"], [role="menu"]')]
            .find(el => el.offsetParent !== null && el.querySelectorAll('[role="option"], [role="menuitem"]').length > 0);
        if (dropdown) break;
        await wait(200);
    }


    const options = [...dropdown.querySelectorAll('[role="option"], [role="menuitem"], div, span, li')]
        .filter(o => o.innerText && o.offsetParent !== null);

    const match = options.find(o => normalize(o.innerText).includes(normalize(optionText)));


    if (match) {
        match.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await wait(200);
        match.click();
    }

    await wait(300);
    document.body.click();
    await wait(200);
}




async function selectVoluntaryDropdowns(form) {
    const wait = ms => new Promise(res => setTimeout(res, ms));
    const normalize = s => s.toLowerCase().replace(/[^\w\s]/gi, '').trim();

    const questionSelectors = [
        "Please specify your Gender",
        "Please specify your Veteran Status",
        "Please specify your Race/Ethnicity",
        "Please specify if you are Hispanic Or Latino"
    ];

    for (const questionText of questionSelectors) {
        const allQuestions = document.querySelectorAll('[data-automation-id*="question"], .css-1obf64m > div');
        let matchedQuestion = null;

        for (const q of allQuestions) {
            const label = q.innerText?.split('\n')[0] || '';
            if (normalize(label).includes(normalize(questionText))) {
                matchedQuestion = q;
                break;
            }
        }

        button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await wait(300);
        button.click();
        await wait(400);

        const value = form.get(questionText);
        const options = [...list.querySelectorAll('[role="option"], [id]')];
        const match = typeof value === "number"
            ? options[value - 1]
            : options.find(o => normalize(o.innerText).includes(normalize(value)));

        if (match) {
            match.scrollIntoView({ behavior: 'smooth', block: 'center' });
            await wait(200);
            match.click();
            await wait(300);
        }
    }
}


async function selectWorkdayQuestion(form, questionText) {
    const wait = ms => new Promise(res => setTimeout(res, ms));

    const normalize = s => s.toLowerCase().replace(/[^\w\s]/gi, '').trim();

    const allQuestions = document.querySelectorAll('[data-automation-id*="question"], .css-1obf64m > div');

    for (const q of allQuestions) {
        const label = q.innerText?.split('\n')[0] || '';
        const normLabel = normalize(label);

        for (const [key, value] of form.entries()) {
            if (normalize(key).includes(normLabel) || normLabel.includes(normalize(key))) {
                const button = q.querySelector('button');
                if (!button) continue;

                button.scrollIntoView({ behavior: 'smooth', block: 'center' });
                await wait(200);
                button.click();
                await wait(400);

                const list = document.querySelector('.css-12m5vbh, [role="listbox"]');
                if (!list) continue;

                if (typeof value === 'number') {
                    const items = list.childNodes;
                    if (items[value]) items[value].click();
                } else {
                    const options = [...list.querySelectorAll('[id],[role="option"]')];
                    const match = options.find(o =>
                        normalize(o.innerText).includes(normalize(value))
                    );
                    if (match) match.click();
                }

                await wait(300);
                break;
            }
        }
    }
}



async function selectWorkdayDropdown(fieldSelector, optionText) {
    const wait = ms => new Promise(res => setTimeout(res, ms));
    const field = document.querySelector(fieldSelector);

    field.focus();
    field.click();
    await wait(300);

    const chars = optionText.split('');
    field.value = '';
    for (const c of chars) {
        field.value += c;
        field.dispatchEvent(new Event('input', { bubbles: true }));
        field.dispatchEvent(new KeyboardEvent('keydown', { key: c, bubbles: true }));
        await wait(30);
    }

    await wait(500);

    let dropdown = document.querySelector('[role="listbox"], .css-12m5vbh, .ReactVirtualized__Grid__innerScrollContainer');
    if (dropdown) {
        const match = [...dropdown.querySelectorAll('[role="option"], [id]')].find(opt =>
            opt.innerText.trim().toLowerCase().includes(optionText.toLowerCase())
        );
        if (match) {
            match.scrollIntoView({ behavior: 'smooth', block: 'center' });
            await wait(200);
            match.click();
        } else {
            field.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
            field.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
        }
    } else {
        field.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        field.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
    }

    field.dispatchEvent(new Event('change', { bubbles: true }));
    field.dispatchEvent(new Event('blur', { bubbles: true }));
}





const form = new Map([
    ["Are you 18 years of age or older?", 1], // Yes = 1, No = 2
    ["Will you now or in the future require sponsorship", 2], // Yes=1, No=2
    ["Will you require relocation", 3],
    ["How Did You Hear About Us?", "LinkedIn"],
    ["candidate-is-previous-worker", false],
    ["first-name", "Elias"],
    ["middle-name", "Kanec"],
    ["last-name", "Chavelaz"],
    ["address", "727 E 82nd St"],
    ["phone-device-type", "Mobile"],
    ["city", "Los Angeles"],
    ["state", "California"],
    ["postal-code", "90001"],
    ["phone-number", "3238452510"],
    ["resume-name", "Elias Chavelaz Resumé"],
    ["signature", "Elias Kanec CHavelaz"],



    ["Gender:",
        2
        // Female - 1
        // Male - 2
    ],



    ["name", "Elias Kanec Chavelaz"],
    ["employee-id", ""],
    ["How do you know if you have a disability?",
        1
        // Yes, I have a disability, or have had one in the past - 0
        // No, I do not have a disability and have not had one in the past - 1
        // I do not want to answer - 2
    ],

    ["Please specify your Gender", 3],
    ["Please specify your Veteran Status", 4],
    ["Please specify your Race/Ethnicity", 2],
    ["Please specify if you are Hispanic Or Latino", 2],



    ["Ethnicity (Single Selection):",
        5
        // American Indian or Alaskan Native, not Hispanic or Latino (United States of America) - 1
        // Asian, not Hispanic or Latino (United States of America) - 2
        // Black, not Hispanic or Latino (United States of America) - 3
        // Decline to Answer (United States of America) - 4
        // Hispanic or Latino (United States of America) - 5
        // Native Hawaiian or Other Pacific Islander, not Hispanic or Latino (United States of America) - 6
        // Two or More Races, not Hispanic or Latino (United States of America) - 7
        // White, not Hispanic or Latino (United States of America) - 8
    ],
    ["Veterans Status",
        3
        // I IDENTIFY AS ONE OR MORE OF THE CLASSIFICATIONS OF PROTECTED VETERANS LISTED ABOVE - 1
        // I IDENTIFY AS A VETERAN, JUST NOT A PROTECTED VETERAN - 2
        // I AM NOT A VETERAN - 3
        // I DO NOT WISH TO SELF-IDENTIFY - 4
    ],
    ["Would you consider relocating for this role?*",
        2
        // I am local to where the job is posted - 1
        // Yes, I would consider relocating for this role - 2
        // No, I am not able to relocate for this role - 3
    ],
    ["Are you subject to any non-compete or non-solicitation restrictions at your current or most recent employer?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["In your current job, do you use or work on the Workday system?*",
        4
        // Yes, I work for a partner implementing or supporting Workday projects - 1

        // Yes, I am directly involved with supporting Workday from a customer's perspective - 2

        // Yes, I occasionally use the Workday system in my current
        // job (to complete items such as: review benefit elections, retrieve paystubs
        // and compensation details, submit payroll and time-tracking requirements, and
        // other typical worker tasks) - 3

        // No, I do not use the Workday system in my current job - 4
    ],
    ["Are you authorized to work in the country where this job is located?*",
        2
        // Yes - 2
        // No - 3
    ],
    ["Do you now or in the future require any immigration filing or visa sponsorship to maintain work authorization, including sponsorship by Workday, renewal/extension of open work permit, permanent residency, etc.?*",
        3
        // Yes - 2
        // No - 3
    ],
    ["Are you a current or former employee of the United States government?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["Did you have any contracting responsibilities while employed with the government?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["While employed with the government, did you have any responsibilities related to Workday?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["While employed with the government, were you involved in creating specifications or designing requirements around a Human Capital Management system?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["If you are or were employed by the United States government, were you a Senior Executive Service employee or a Military Officer (grade O-7 or above)?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["This information is sought for compliance with U.S. Export Control laws. All information that you provide will be considered in accordance with applicable law. Are you a current citizen, national or resident of any of the following countries/regions: Iran, Cuba, North Korea, Syria, Crimea, Donetsk People’s Republic (DNR), Luhansk People’s Republic (LNR) regions of Ukraine?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["Are you related to a current Workday employee?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["To the best of your knowledge, are you related to an employee of a customer, or a government official, who has direct business interactions with Workday?*",
        2
        // Yes - 1
        // No - 2
    ],
    ['I acknowledge that I have read, understood and reviewed the above questions, and I have answered them truthfully and accurately. I further understand, and agree, that any offer of employment (or job transfer or promotion) I may receive from Workday is conditioned upon the truth of the information and statements I have made and that, in the event it is subsequently discovered that any of the information I have submitted or provided as part of my application for employment (or job transfer or promotion) is inaccurate or misleading, then regardless of when or how discovered, any such offer of employment may be rescinded and, in the event I have already commenced employment, such employment may be immediately terminated for cause, to the fullest extent permitted by applicable law. Please enter "yes" if you acknowledge. (Required)”',
        1
        // Yes - 1
        // No - 2
    ],
    ["Are you now, or have you ever been: (a) employed by the U.S. federal government, or (b) a U.S. military officer or civilian equivalent?*",
        2
        // Yes - 1
        // No - 2
    ],
    ["Click on the link below to review the Non Disclosure Agreement.",
        1
        // I have read and agree to the Non Disclosure Agreement - 1
        // I have read and DO NOT agree to the Non Disclosure Agreement - 2
    ],
    ["Click on the link below to review the Arbitration Agreement.",
        1
        // I have read and agree to the Mutual Arbitration Agreement - 1
        // I have read and DO NOT agree to the Mutual Arbitration Agreement - 2
    ]
])

chrome.runtime.onMessage.addListener(async (message, sender) => {
    const typeOnElement = (text, element) => {
        if (!element) return

        return new Promise(resolve => {
            for (const character of text.split('')) {
                const keydownEvent = new KeyboardEvent('keydown', { key: character, bubbles: true })
                const inputEvent = new Event('input', { bubbles: true })
                const keyupEvent = new KeyboardEvent('keyup', { key: character, bubbles: true })

                element.dispatchEvent(keydownEvent)
                element.value += character
                element.dispatchEvent(inputEvent)
                element.dispatchEvent(keyupEvent)
            }

            element.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'Enter',
                bubbles: true
            }))
            element.dispatchEvent(new Event('input', {
                bubbles: true
            }))
            element.dispatchEvent(new KeyboardEvent('keyup', {
                key: 'Enter',
                bubbles: true
            }))

            setTimeout(() => resolve(), 500)
        })
    }

    const typeOnTextBox = (text, element) => {
        if (!element) return

        element.value = text
        element.dispatchEvent(new Event('input', { bubbles: true }))
    }

    const typeOnTextArea = (text, element) => {
        if (!element) return

        const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype,
            'value'
        ).set

        nativeTextAreaValueSetter.call(element, text)

        element.dispatchEvent(new Event('input', { bubbles: true }))
        element.dispatchEvent(new Event('change', { bubbles: true }))
    }

    const wait = miliseconds => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), miliseconds)
        })
    }

    const section = document.querySelector(".css-1ylcaf3")
    const date = (new Date()).toLocaleDateString().split("/")
    let questions

    console.log(section.innerHTML)

    if (section) switch (section.innerHTML) {
        case 'My Information':
            //await typeOnElement( form.get( "how-did-you-hear-about-us" ), document.querySelector( 'input[id="source--source"]' ) )
            await selectWorkdayDropdown('#source--source', form.get("How Did You Hear About Us?"));

            const [radio_true, radio_false] = document.querySelectorAll('input[name="candidateIsPreviousWorker"][type="radio"]')

            form.get("candidate-is-previous-worker") ? radio_true.click() : radio_false.click()

            typeOnTextBox(form.get("first-name"), document.getElementById('name--legalName--firstName'))
            typeOnTextBox(form.get("middle-name"), document.getElementById('name--legalName--middleName'))
            typeOnTextBox(form.get("last-name"), document.getElementById('name--legalName--lastName'))

            typeOnTextBox(form.get("address"), document.getElementById('address--addressLine1'))
            typeOnTextBox(form.get("city"), document.getElementById('address--city'))
            typeOnTextBox(form.get("postal-code"), document.getElementById('address--postalCode'))


            await selectWorkdayDropdown('#address--countryRegion', form.get('state'))

            typeOnTextBox(form.get("phone-number"), document.getElementById('phoneNumber--phoneNumber'))
            await selectStaticDropdown('#phoneNumber--deviceType', form.get("phone-device-type"));

            await selectWorkdayDropdown('#phoneNumber--countryPhoneCode', 'United States of America (+1)')

            break;

            const stateField = document.getElementById('address--countryRegion')
            if (stateField) {
                stateField.click()
                let dropdown
                for (let i = 0; i < 10; i++) {
                    dropdown = document.querySelector('.css-12m5vbh')
                    if (dropdown && dropdown.childNodes.length > 0) break
                    await wait(300)
                }

                if (dropdown) {
                    const options = [...dropdown.querySelectorAll('[id]')]
                    const match = options.find(opt =>
                        opt.innerText.trim().toLowerCase() === form.get('state').toLowerCase()
                    )

                    if (match) {
                        match.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        await wait(200)
                        match.click()
                    } 
                } 
            }

            typeOnTextBox(form.get("phone-number"), document.getElementById('phoneNumber--phoneNumber'))
            break
        case "My Experience":

            const resumeUrl = chrome.runtime.getURL("Elias Chavelaz Resumé.pdf");
            const response = await fetch(resumeUrl);
          
            const content = await response.arrayBuffer();
            const blob = new Blob([content], { type: "application/pdf" });
            const file = new File([blob], `${form.get("resume-name")}.pdf`, { type: "application/pdf" });

            let fileInput = document.querySelector('input[type="file"]');
            if (!fileInput) {
                const allInputs = [...document.querySelectorAll('input[type="file"]')];
                fileInput = allInputs.find(i => i.offsetParent !== null); // visible one
            }

            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            fileInput.dispatchEvent(new Event("input", { bubbles: true }));
            fileInput.dispatchEvent(new Event("change", { bubbles: true }));

            await new Promise(res => setTimeout(res, 1000));

            console.log("Résumé uploaded successfully.");
            break;


        case "Application Questions":
        case "Application Questions 1 of 2":
        case "Application Questions 2 of 2":
            console.log("Auto-filling Workday dropdown questions...");
            await selectWorkdayQuestion(form);
            break;


        case "Voluntary Disclosures":
            await selectVoluntaryDropdowns(form);

            const VIBE = document.getElementById("termsAndConditions--acceptTermsAndAgreements")

            if (VIBE) VIBE.click()
            break
        case "Self Identify":
            typeOnTextBox(form.get("name"), document.getElementById('selfIdentifiedDisabilityData--name'))
            typeOnTextBox(form.get("employee-id"), document.getElementById('selfIdentifiedDisabilityData--employeeId'))

            document.querySelector(".css-hdh0bo").click()
            await wait(250)
            document.querySelector(`button[data-uxi-datepicker-mmdd="${date[0]}${date[1]}"]`).click()

            const box = document.querySelector(".ReactVirtualized__Grid__innerScrollContainer").childNodes[form.get("How do you know if you have a disability?")].querySelector("input")

            box.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })

            await wait(250)

            box.click()

            break
    }
})
