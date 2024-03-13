import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumItemDetailComponent } from './album-item-detail.component';

describe('AlbumItemDetailComponent', () => {
  let component: AlbumItemDetailComponent;
  let fixture: ComponentFixture<AlbumItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumItemDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
