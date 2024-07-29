document.addEventListener('DOMContentLoaded', (event) => {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const charRemaining = document.getElementById('charRemaining');
    const maxLength = textInput.getAttribute('maxlength');

    textInput.addEventListener('input', () => {
        const length = textInput.value.length;
        charCount.textContent = `Total character:${length} `;
        charRemaining.textContent = `Remaining:${50 - length} `;
    });
});

