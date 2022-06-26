import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NbDialogModule, NbDialogService } from '@nebular/theme';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NbDialogModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        NbDialogService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mazakAssessment app is running!');
  });

  it('should set default values to add contact form data when method is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.addNewContactFormData = {
      role: 'Developer',
      isFavorite: true,
      location: 'San Francisco',
      organization: 'Google',
      status: 'active',
      tags: ['Internal Works', 'Loaded'],
      username: 'Alex'
    };
    app.setDefaultValuesForContactDataForm();
    expect(app.addNewContactFormData.username).toBe('');
    expect(app.addNewContactFormData.location).toBe('');
    expect(app.addNewContactFormData.organization).toBe('');
    expect(app.addNewContactFormData.role).toBe('');
    expect(app.addNewContactFormData.status).toBe('active');
    expect(app.addNewContactFormData.isFavorite).toBeFalsy();
    expect(app.addNewContactFormData.tags).toBe([]);
  });
});
