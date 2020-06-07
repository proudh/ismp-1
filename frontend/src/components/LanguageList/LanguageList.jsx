import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const languageOptions = [
  { key: 'English', text: 'English', value: 'en' },
  { key: 'Chinese', text: '中文', value: 'zh' },
  { key: 'Japanese', text: '日本語', value: 'ja' },
  { key: 'Korean', text: '한국어', value: 'ko' },
  { key: 'Vietnamese', text: 'Tiếng Việt', value: 'vi' }
];

const LanguageList = () => {
  const { i18n } = useTranslation();

  const defaultSetLang = i18n.language;
  const [langValue, setLangValue] = useState(defaultSetLang);

  const selectLanguage = lang => {
    setLangValue(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Dropdown item icon="world" simple>
      <Dropdown.Menu style={{ marginTop: '-5px' }}>
        {languageOptions.map(opt => {
          return (
            <Dropdown.Item
              active={opt.value === langValue}
              key={opt.key}
              onClick={() => selectLanguage(opt.value)}
            >
              {opt.text}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageList;
